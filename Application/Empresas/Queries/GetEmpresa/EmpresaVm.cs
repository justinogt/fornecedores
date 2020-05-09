using Application.Common.Mappings;
using Domain.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace Application.Empresas.Queries.GetEmpresa
{
    public class EmpresaVm : IMapFrom<Empresa>
    {
        public string NomeFantasia { get; set; }
        public string Uf { get; set; }
        public string Cnpj { get; set; }
        public IList<FornecedorDto> Fornecedores { get; set; }
    }
}
