import { EmpresaSimple } from './empresas.model';

export interface FornecedorSaveCommand {
  nome: string;
  cpfCnpj: string;
  rg: string;
  dataNascimento: Date;
  empresaId: number;
}

export interface FornecedorSimple {
  id: number;
  nome: string;
  cpfCnpj: string;
  rg: string;
  criadoEm: Date;
}

export interface TelefoneSimple {
  id: number;
  numero: string;
}

export interface FornecedorDetailVm extends FornecedorSimple {
  dataNascimento: Date;
  isPf: boolean;
  empresa: EmpresaSimple;
  telefones: TelefoneSimple[];
}

export interface FornecedoresListVm {
  fornecedores: FornecedorListItem[];
  empresas: EmpresaSimple[];
}
export interface FornecedorListItem extends FornecedorSimple {
  empresa: string;
}
