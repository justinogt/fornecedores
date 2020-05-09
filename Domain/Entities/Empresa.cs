using Domain.Common;
using System.Collections.Generic;

namespace Domain.Entities
{
    public class Empresa : Entity
    {
        public string NomeFantasia { get; set; }
        public string Uf { get; set; }
        public string Cnpj { get; set; }
        public IList<Fornecedor> Fornecedores { get; set; }

        public Empresa()
        {
            Fornecedores = new List<Fornecedor>();
        }
    }
}
