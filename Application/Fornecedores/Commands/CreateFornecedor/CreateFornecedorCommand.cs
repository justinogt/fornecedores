using Application.Common.Interfaces;
using Domain.Entities;
using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace Application.Fornecedores.Commands.CreateFornecedor
{
    public class CreateFornecedorCommand : IRequest<int>
    {
        public string Nome { get; set; }
        public string CpfCnpj { get; set; }
        public string RG { get; set; }
        public DateTime DataNascimento { get; set; }
        public int EmpresaId { get; set; }
    }

    public class CreateFornecedorCommandHandler : IRequestHandler<CreateFornecedorCommand, int>
    {
        private readonly IAppDbContext _context;

        public CreateFornecedorCommandHandler(IAppDbContext context)
        {
            _context = context;
        }

        public async Task<int> Handle(CreateFornecedorCommand request, CancellationToken cancellationToken)
        {
            var fornecedor = new Fornecedor
            {
                Nome = request.Nome,
                CpfCnpj = request.CpfCnpj,
                RG = request.RG,
                DataNascimento = request.DataNascimento,
                Empresa = _context.Empresas.Where(item => item.Id == request.EmpresaId).FirstOrDefault()
            };
            _context.Fornecedores.Add(fornecedor);

            await _context.SaveChangesAsync(cancellationToken);

            return fornecedor.Id;
        }
    }
}
