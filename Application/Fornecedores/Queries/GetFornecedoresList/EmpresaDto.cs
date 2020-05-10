using Application.Common.Mappings;
using AutoMapper;
using Domain.Entities;

namespace Application.Fornecedores.Queries.GetFornecedoresList
{
    public class EmpresaDto : IMapFrom<Empresa>
    {
        public int Id { get; set; }
        public string Nome { get; set; }
        public string Uf { get; set; }

        public void Mapping(Profile profile)
        {
            profile.CreateMap<Empresa, EmpresaDto>()
                .ForMember(d => d.Nome, opt => opt.MapFrom(s => s.NomeFantasia));
        }
    }
}
