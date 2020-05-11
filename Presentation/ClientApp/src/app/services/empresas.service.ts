import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Response } from '../models/response.model';
import { environment } from 'src/environments/environment';
import { EmpresasListVm, EmpresaDetailVm, EmpresaSaveCommand } from '../models/empresas.model';

@Injectable()
export class EmpresasService {
  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<Response<EmpresasListVm>>(`${environment.ApiURL}/empresas`);
  }

  get(id: number) {
    return this.http.get<Response<EmpresaDetailVm>>(`${environment.ApiURL}/empresas/${id}`);
  }

  save(company: EmpresaSaveCommand) {
    return this.http.post<Response<number>>(`${environment.ApiURL}/empresas`, company);
  }
}
