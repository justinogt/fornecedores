using Application.Common.Dtos.Empresas;
using System.Collections.Generic;

namespace Application.Fornecedores.Queries.GetFornecedoresList
{
    public class FornecedoresListVm
    {
        public List<FornecedorListItem> Fornecedores { get; set; }
        public List<EmpresaSimple> Empresas { get; set; }
    }
}
