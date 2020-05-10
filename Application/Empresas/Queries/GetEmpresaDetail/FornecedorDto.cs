using Application.Common.Mappings;
using AutoMapper;
using Domain.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Application.Empresas.Queries.GetEmpresa
{
    public class FornecedorDto : IMapFrom<Fornecedor>
    {
        public string Nome { get; set; }
        public string CpfCnpj { get; set; }
        public string RG { get; set; }
        public DateTime DataNascimento { get; set; }
        public IList<string> Telefones { get; set; }

        public void Mapping(Profile profile)
        {
            profile.CreateMap<Fornecedor, FornecedorDto>()
                .ForMember(d => d.Telefones, opt => opt.MapFrom(s => s.Telefones.Select(i => i.Numero)));
        }
    }
}
