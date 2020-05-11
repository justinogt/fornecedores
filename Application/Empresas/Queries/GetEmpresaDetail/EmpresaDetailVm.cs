using Application.Common.Dtos.Empresas;
using Application.Common.Mappings;
using Domain.Entities;
using System.Collections.Generic;

namespace Application.Empresas.Queries.GetEmpresaDetail
{
    public class EmpresaDetailVm : EmpresaSimple, IMapFrom<Empresa>
    {
        public IList<FornecedorEmpresaDetail> Fornecedores { get; set; }
    }
}
