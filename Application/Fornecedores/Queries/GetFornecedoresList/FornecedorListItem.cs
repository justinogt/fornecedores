using Application.Common.Dtos.Fornecedores;
using Application.Common.Mappings;
using AutoMapper;
using Domain.Entities;

namespace Application.Fornecedores.Queries.GetFornecedoresList
{
    public class FornecedorListItem : FornecedorSimple, IMapFrom<Fornecedor>
    {
        public string Empresa { get; set; }

        public void Mapping(Profile profile)
        {
            profile.CreateMap<Fornecedor, FornecedorListItem>()
                .ForMember(d => d.Empresa, opt => opt.MapFrom(s => s.Empresa.NomeFantasia));
        }
    }
}
