import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Response } from '../models/response.model';
import { EmpresasListVm, EmpresaDetailVm, EmpresaDto } from '../models/empresas.model';
import { environment } from 'src/environments/environment';

@Injectable()
export class EmpresasService {
  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<Response<EmpresasListVm>>(`${environment.ApiURL}/empresas`);
  }

  get(id: number) {
    return this.http.get<Response<EmpresaDetailVm>>(`${environment.ApiURL}/empresas/${id}`);
  }

  save(company: EmpresaDto) {
    return this.http.post<Response<number>>(`${environment.ApiURL}/empresas`, company);
  }
}
