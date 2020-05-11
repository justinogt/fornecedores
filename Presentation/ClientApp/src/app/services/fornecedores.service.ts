import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Response, STATUS } from '../models/response.model';
import { FornecedoresListVm, FornecedorSaveDto } from '../models/fornecedores.model';
import { switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable()
export class FornecedoresService {
  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<Response<FornecedoresListVm>>(`${environment.ApiURL}/fornecedores`)
      .pipe(switchMap(vm => {
        if (vm.status === STATUS.ERROR) return of(vm);

        vm.data.fornecedores = vm.data.fornecedores
          .map(item => ({ ...item, cadastradoEm: new Date(item.cadastradoEm) }));

        return of(vm);
      }));
  }

  save(provider: FornecedorSaveDto) {
    return this.http.post<Response<number>>(`${environment.ApiURL}/fornecedores`, provider);
  }
}
