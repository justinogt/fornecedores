using Domain.Common;
using System;
using System.Collections.Generic;
using System.Text.RegularExpressions;

namespace Domain.Entities
{
    public class Fornecedor : Entity
    {
        public string Nome { get; set; }
        public string CpfCnpj { get; set; }
        public string Rg { get; set; }
        public DateTime DataNascimento { get; set; }
        public Empresa Empresa { get; set; }
        public IList<Telefone> Telefones { get; set; }

        public Fornecedor()
        {
            Telefones = new List<Telefone>();
        }

        public bool IsPf => Regex.IsMatch(CpfCnpj, @"^[0-9]{11}$|^[0-9]{3}\.[0-9]{3}\.[0-9]{3}-[0-9]{2}$");
    }
}
