using Application.Common.Mappings;
using Domain.Entities;

namespace Application.Common.Dtos.Telefones
{
    public class TelefoneSimple : IMapFrom<Telefone>
    {
        public int Id { get; set; }
        public string Numero { get; set; }
    }
}
