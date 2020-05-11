using Application.Common.Mappings;
using Domain.Entities;

namespace Application.Common.Dtos.Empresas
{
    public class EmpresaSimple : IMapFrom<Empresa>
    {
        public int Id { get; set; }
        public string NomeFantasia { get; set; }
        public string Uf { get; set; }
        public string Cnpj { get; set; }
    }
}
