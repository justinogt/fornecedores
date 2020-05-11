using Application.Common.Interfaces;
using Application.Empresas.Queries.GetEmpresaDetail;
using AutoMapper;
using AutoMapper.QueryableExtensions;
using FluentValidation;
using Microsoft.EntityFrameworkCore;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;

namespace Application.Empresas.Commands.DeleteEmpresa
{
    public class DeleteEmpresaCommandValidator : AbstractValidator<DeleteEmpresaCommand>
    {
        private readonly IAppDbContext _context;
        private readonly IMapper _mapper;

        public DeleteEmpresaCommandValidator(IAppDbContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;

            RuleFor(item => item.Id)
                .NotEmpty().WithMessage("Id não pode ser vazio")
                .MustAsync(NotHaveFornecedores)
                .WithMessage("Não é possível excluir a empresa, pois existe fornecedor vinculado.");
        }

        private async Task<bool> NotHaveFornecedores(int id, CancellationToken token)
        {
            var fornecedores = await _context.Empresas.Where(item => item.Id == id)
                .Select(item => item.Fornecedores)
                .FirstOrDefaultAsync(token);
            return fornecedores.Count == 0;
        }
    }
}
