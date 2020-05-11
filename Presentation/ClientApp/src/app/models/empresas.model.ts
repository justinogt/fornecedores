import { FornecedorSimple } from './fornecedores.model';

export interface EmpresaSaveCommand {
  nomeFantasia: string;
  cnpj: string;
  uf: string;
}

export interface EmpresaSimple {
  id: number;
  nomeFantasia: string;
  cnpj: string;
  uf: string;
}

export interface EmpresaDetailVm extends EmpresaSimple {
  fornecedores: FornecedorEmpresaDetail[];
}
export interface FornecedorEmpresaDetail extends FornecedorSimple {
  telefones: string[];
}

export interface EmpresasListVm {
  empresas: EmpresaSimple[];
}
