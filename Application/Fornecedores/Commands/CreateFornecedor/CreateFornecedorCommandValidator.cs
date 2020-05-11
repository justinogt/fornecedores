using Application.Common.Interfaces;
using FluentValidation;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.RegularExpressions;
using System.Threading;
using System.Threading.Tasks;

namespace Application.Fornecedores.Commands.CreateFornecedor
{
    public class CreateFornecedorCommandValidator : AbstractValidator<CreateFornecedorCommand>
    {
        private readonly IAppDbContext _context;

        public CreateFornecedorCommandValidator(IAppDbContext context)
        {
            _context = context;

            RuleFor(i => i.Nome)
                .NotEmpty().WithMessage("Nome inválido");

            RuleFor(i => i.EmpresaId)
                .NotEmpty().WithMessage("Empresa inválida");

            RuleFor(i => i.CpfCnpj)
                .NotEmpty().WithMessage("CPF ou CNPJ inválido");

            RuleFor(i => i)
                .Must(IsDataNascimentoValid).WithMessage("Data Nascimento inválido")
                .Must(IsRGValid).WithMessage("RG inválido")
                .MustAsync(IsPFAdultValid).WithMessage("A empresa é do PR e não aceita fornecedores menor de Idade");
        }

        private bool IsRGValid(CreateFornecedorCommand data)
        {
            return IsCPF(data.CpfCnpj) && !string.IsNullOrEmpty(data.RG);
        }

        private bool IsDataNascimentoValid(CreateFornecedorCommand data)
        {
            DateTime date = DateTime.Now;
            bool validDate = DateTime.TryParse(data.DataNascimento, out date);

            return IsCPF(data.CpfCnpj) && !string.IsNullOrEmpty(data.DataNascimento) && validDate;
        }

        private async Task<bool> IsPFAdultValid(CreateFornecedorCommand data, CancellationToken token)
        {
            DateTime date = DateTime.Now;
            DateTime.TryParse(data.DataNascimento, out date);

            string empresaUf = await _context.Empresas.Where(item => item.Id == data.EmpresaId)
                .Select(item => item.Uf)
                .FirstOrDefaultAsync(token);

            if (empresaUf != "PR") return true;

            return IsCPF(data.CpfCnpj) && (DateTime.Now.Year - date.Year >= 18);
        }

        private bool IsCPF(string cpfCnpj)
        {
            return Regex.IsMatch(cpfCnpj, @"\d{3}\.\d{3}\.\d{3}-\d{2}");
        }
    }
}
