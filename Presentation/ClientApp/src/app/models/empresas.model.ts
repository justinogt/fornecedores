export interface EmpresaDto {
  cnpj: string;
  nomeFantasia: string;
  uf: string;
}

export interface EmpresaListDto extends EmpresaDto {
  id: number;
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
export interface EmpresaDetailVm extends EmpresaDto {
  fornecedores: FornecedorDetailDto[];
}
