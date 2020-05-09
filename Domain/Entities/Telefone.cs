using Domain.Common;

namespace Domain.Entities
{
    public class Telefone : Entity
    {
        public string Numero { get; set; }
        public Fornecedor Fornecedor { get; set; }
    }
}
