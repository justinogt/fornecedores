using FluentValidation;
using System;
using System.Collections.Generic;
using System.Text;
using System.Text.RegularExpressions;

namespace Application.Empresas.Commands.CreateEmpresa
{
    public class CreateEmpresaCommandValidator : AbstractValidator<CreateEmpresaCommand>
    {
        public CreateEmpresaCommandValidator()
        {
            RuleFor(item => item.Cnpj)
                .Must(BeValidCnpj)
                .WithMessage("Cnpj inválido");
        }

        private bool BeValidCnpj(string cnpj)
        {
            return Regex.IsMatch(cnpj, @"\d{14}|\d{2}\.\d{3}.\d{3}/\d{4}-\d{2}");
        }
    }
}
