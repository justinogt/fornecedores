using Application.Common.Mappings;
using AutoMapper;
using Domain.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace Application.Fornecedores.Queries.GetFornecedores
{
    public class FornecedorDto : IMapFrom<Fornecedor>
    {
        public int Id { get; set; }
        public string Nome { get; set; }
        public DateTime CadastradoEm { get; set; }
        public string CpfCnpj { get; set; }
        public string RG { get; set; }
        public DateTime DataNascimento { get; set; }
        public string Empresa { get; set; }
        public bool IsPF { get; set; }

        public void Mapping(Profile profile)
        {
            profile.CreateMap<Fornecedor, FornecedorDto>()
                .ForMember(d => d.CadastradoEm, opt => opt.MapFrom(s => s.CriadoEm))
                .ForMember(d => d.Empresa, opt => opt.MapFrom(s => s.Empresa.NomeFantasia));
        }
    }
}
