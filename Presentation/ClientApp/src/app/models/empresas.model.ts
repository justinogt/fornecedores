export interface EmpresaListDto {
  id: number;
  cnpj: string;
  nomeFantasia: string;
  uf: string;
}
export interface EmpresasListVm {
  empresas: EmpresaListDto[];
}

export interface FornecedorDetailDto {
  nome: string;
  cpfCnpj: string;
  rg: string;
  dataNascimento: Date;
  telefones: string[];
}
export interface EmpresaDetailVm {
  nomeFantasia: string;
  uf: string;
  cnpj: string;
  fornecedores: FornecedorDetailDto[];
}
