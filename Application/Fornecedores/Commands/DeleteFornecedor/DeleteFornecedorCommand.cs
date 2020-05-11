using Application.Common.Interfaces;
using MediatR;
using System.Threading;
using System.Threading.Tasks;

namespace Application.Fornecedores.Commands.DeleteFornecedor
{
    public class DeleteFornecedorCommand : IRequest<bool>
    {
        public int Id { get; set; }
    }

    public class DeleteFornecedorCommandHandler : IRequestHandler<DeleteFornecedorCommand, bool>
    {
        private readonly IAppDbContext _context;

        public DeleteFornecedorCommandHandler(IAppDbContext context)
        {
            _context = context;
        }

        public async Task<bool> Handle(DeleteFornecedorCommand request, CancellationToken cancellationToken)
        {
            var entity = await _context.Fornecedores.FindAsync(request.Id);

            _context.Fornecedores.Remove(entity);
            await _context.SaveChangesAsync(cancellationToken);
            return true;
        }
    }
}
