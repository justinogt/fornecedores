using FluentValidation;
using System.Text.RegularExpressions;

namespace Application.Empresas.Commands.CreateEmpresa
{
    public class CreateEmpresaCommandValidator : AbstractValidator<CreateEmpresaCommand>
    {
        public CreateEmpresaCommandValidator()
        {
            RuleFor(i => i.Cnpj)
                .Must(BeValidCnpj)
                .WithMessage("Cnpj inválido");

            RuleFor(i => i.NomeFantasia)
                .NotEmpty()
                .WithMessage("Nome inválido");

            RuleFor(i => i.Uf)
                .NotEmpty().WithMessage("UF inválido")
                .MaximumLength(2).WithMessage("UF inválido");
        }

        private bool BeValidCnpj(string cnpj)
        {
            return Regex.IsMatch(cnpj, @"\d{14}|\d{2}\.\d{3}.\d{3}/\d{4}-\d{2}");
        }
    }
}
