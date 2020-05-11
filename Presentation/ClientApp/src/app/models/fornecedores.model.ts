export interface FornecedorSaveDto {
  empresaId: number;
  nome: string;
  cpfCnpj: string;
  rg: string;
  dataNascimento: Date;
}

export interface EmpresaListDto {
  id: number;
  nome: string;
  uf: string;
}

export interface FornecedorListDto {
  id: number;
  nome: string;
  cadastradoEm: Date;
  cpfCnpj: string;
  rg: string;
  dataNascimento: Date;
  empresa: string;
  isPF: boolean;
}

export interface FornecedoresListVm {
  fornecedores: FornecedorListDto[];
  empresas: EmpresaListDto[];
}

