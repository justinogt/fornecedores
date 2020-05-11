export interface EmpresaSaveDto {
  cnpj: string;
  nomeFantasia: string;
  uf: string;
}

export interface EmpresaListDto extends EmpresaSaveDto {
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
export interface EmpresaDetailVm extends EmpresaSaveDto {
  fornecedores: FornecedorDetailDto[];
}
