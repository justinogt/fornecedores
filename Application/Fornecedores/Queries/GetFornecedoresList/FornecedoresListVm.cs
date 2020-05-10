using Application.Fornecedores.Queries.GetFornecedoresList;
using System.Collections.Generic;

namespace Application.Fornecedores.Queries.GetFornecedores
{
    public class FornecedoresListVm
    {
        public List<FornecedorDto> Fornecedores { get; set; }
        public List<EmpresaDto> Empresas { get; set; }
    }
}
