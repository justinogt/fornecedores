import { Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Response, STATUS } from '../models/response.model';
import { FornecedoresListVm } from '../models/fornecedores.model';
import { switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

@Inject({
  providedIn: 'root',
})
export class FornecedoresService {
  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl) { }

  getAll() {
    return this.http.get<Response<FornecedoresListVm>>(`${this.baseUrl}api/fornecedores`)
      .pipe(switchMap(vm => {
        if (vm.status === STATUS.ERROR) return of(vm);

        vm.data.fornecedores = vm.data.fornecedores
          .map(item => ({ ...item, cadastradoEm: new Date(item.cadastradoEm) }));

        return of(vm);
      }));
  }
}
