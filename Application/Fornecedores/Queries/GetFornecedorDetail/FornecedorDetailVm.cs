using Application.Common.Dtos.Empresas;
using Application.Common.Dtos.Fornecedores;
using Application.Common.Dtos.Telefones;
using Application.Common.Mappings;
using Domain.Entities;
using System;
using System.Collections.Generic;

namespace Application.Fornecedores.Queries.GetFornecedorDetail
{
    public class FornecedorDetailVm : FornecedorSimple, IMapFrom<Fornecedor>
    {
        public DateTime DataNascimento { get; set; }
        public bool IsPf { get; set; }
        public EmpresaSimple Empresa { get; set; }
        public IList<TelefoneSimple> Telefones { get; set; }
    }
}
