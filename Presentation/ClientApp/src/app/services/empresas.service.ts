import { Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Response } from '../models/response.model';
import { EmpresasListVm, EmpresaDetailVm } from '../models/empresas.model';

@Inject({
  providedIn: 'root',
})
export class EmpresasService {
  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl) { }

  getAll() {
    return this.http.get<Response<EmpresasListVm>>(`${this.baseUrl}api/empresas`);
  }

  get(id: number) {
    return this.http.get<Response<EmpresaDetailVm>>(`${this.baseUrl}api/empresas/${id}`)
  }
}
