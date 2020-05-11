using Application.Common.Dtos.Fornecedores;
using Application.Common.Mappings;
using AutoMapper;
using Domain.Entities;
using System.Collections.Generic;
using System.Linq;

namespace Application.Empresas.Queries.GetEmpresaDetail
{
    public class FornecedorEmpresaDetail : FornecedorSimple, IMapFrom<Fornecedor>
    {
        public IList<string> Telefones { get; set; }

        public void Mapping(Profile profile)
        {
            profile.CreateMap<Fornecedor, FornecedorEmpresaDetail>()
                .ForMember(d => d.Telefones, opt => opt.MapFrom(s => s.Telefones.Select(i => i.Numero)));
        }
    }
}
