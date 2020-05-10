import { Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Response } from '../models/response.model';
import { FornecedoresListVm } from '../models/fornecedores.model';

@Inject({
  providedIn: 'root',
})
export class FornecedoresService {
  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl) { }

  getAll() {
    return this.http.get<Response<FornecedoresListVm>>(`${this.baseUrl}api/fornecedores`);
  }
}
