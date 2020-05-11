using Application.Common.Mappings;
using Domain.Entities;
using System;

namespace Application.Common.Dtos.Fornecedores
{
    public class FornecedorSimple : IMapFrom<Fornecedor>
    {
        public int Id { get; set; }
        public string Nome { get; set; }
        public string CpfCnpj { get; set; }
        public string Rg { get; set; }
        public DateTime CriadoEm { get; set; }
    }
}
