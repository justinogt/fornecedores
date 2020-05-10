export interface FornecedorListDto {
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
}

