using Application.Common.Mappings;
using Domain.Entities;
using System.Collections.Generic;

namespace Application.Empresas.Queries.GetEmpresa
{
    public class EmpresaDetailVm : IMapFrom<Empresa>
    {
        public string NomeFantasia { get; set; }
        public string Uf { get; set; }
        public string Cnpj { get; set; }
        public IList<FornecedorDto> Fornecedores { get; set; }
    }
}
