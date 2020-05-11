import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Response, STATUS } from '../models/response.model';
import { switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { FornecedoresListVm, FornecedorSaveCommand, FornecedorDetailVm } from '../models/fornecedores.model';

@Injectable()
export class FornecedoresService {
  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<Response<FornecedoresListVm>>(`${environment.ApiURL}/fornecedores`)
      .pipe(switchMap(res => {
        if (res.status === STATUS.ERROR) return of(res);

        res.data.fornecedores = res.data.fornecedores
          .map(item => ({ ...item, criadoEm: new Date(item.criadoEm) }));

        return of(res);
      }));
  }

  get(id: number) {
    return this.http.get<Response<FornecedorDetailVm>>(`${environment.ApiURL}/fornecedores/${id}`)
      .pipe(switchMap(res => {
        if (res.status === STATUS.ERROR) return of(res);

        res.data.criadoEm = new Date(res.data.criadoEm);
        if (res.data.isPf)
          res.data.dataNascimento = new Date(res.data.dataNascimento);

        return of(res);
      }));
  }

  save(provider: FornecedorSaveCommand) {
    return this.http.post<Response<number>>(`${environment.ApiURL}/fornecedores`, provider);
  }
}
