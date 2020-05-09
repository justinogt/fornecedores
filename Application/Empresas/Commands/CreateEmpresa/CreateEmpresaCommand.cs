using Application.Common.Interfaces;
using AutoMapper;
using Domain.Entities;
using MediatR;
using System.Threading;
using System.Threading.Tasks;

namespace Application.Empresas.Commands.CreateEmpresa
{
    public class CreateEmpresaCommand : IRequest<int>
    {
        public string NomeFantasia { get; set; }
        public string Uf { get; set; }
        public string Cnpj { get; set; }
    }

    public class CreateEmpresaCommandHandler : IRequestHandler<CreateEmpresaCommand, int>
    {
        private readonly IAppDbContext _context;

        public CreateEmpresaCommandHandler(IAppDbContext context)
        {
            _context = context;
        }

        public async Task<int> Handle(CreateEmpresaCommand request, CancellationToken cancellationToken)
        {
            var empresa = new Empresa
            {
                NomeFantasia = request.NomeFantasia,
                Uf = request.Uf,
                Cnpj = request.Cnpj
            };
            _context.Empresas.Add(empresa);

            await _context.SaveChangesAsync(cancellationToken);

            return empresa.Id;
        }
    }
}
