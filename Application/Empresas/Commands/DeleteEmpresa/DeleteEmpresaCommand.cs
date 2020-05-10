using Application.Common.Interfaces;
using MediatR;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace Application.Empresas.Commands.DeleteEmpresa
{
    public class DeleteEmpresaCommand : IRequest<bool>
    {
        public int Id { get; set; }
    }

    public class DeleteEmpresaCommandHandler : IRequestHandler<DeleteEmpresaCommand, bool>
    {
        private readonly IAppDbContext _context;

        public DeleteEmpresaCommandHandler(IAppDbContext context)
        {
            _context = context;
        }

        public async Task<bool> Handle(DeleteEmpresaCommand request, CancellationToken cancellationToken)
        {
            var entity = await _context.Empresas.FindAsync(request.Id);
            _context.Empresas.Remove(entity);

            await _context.SaveChangesAsync(cancellationToken);
            return true;
        }
    }
}
