using Application.Common.Dtos.Empresas;
using System.Collections.Generic;

namespace Application.Empresas.Queries.GetEmpresasList
{
    public class EmpresasListVm
    {
        public List<EmpresaSimple> Empresas { get; set; }
    }
}
