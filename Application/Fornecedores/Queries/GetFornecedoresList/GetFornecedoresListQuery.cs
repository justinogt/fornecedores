using Application.Common.Interfaces;
using Application.Fornecedores.Queries.GetFornecedoresList;
using AutoMapper;
using AutoMapper.QueryableExtensions;
using MediatR;
using Microsoft.EntityFrameworkCore;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;

namespace Application.Fornecedores.Queries.GetFornecedores
{
    public class GetFornecedoresListQuery : IRequest<FornecedoresListVm>
    {
    }

    public class GetFornecedoresQueryListHandler : IRequestHandler<GetFornecedoresListQuery, FornecedoresListVm>
    {
        private readonly IAppDbContext _context;
        private readonly IMapper _mapper;

        public GetFornecedoresQueryListHandler(IAppDbContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        public async Task<FornecedoresListVm> Handle(GetFornecedoresListQuery request, CancellationToken cancellationToken)
        {
            return new FornecedoresListVm
            {
                Fornecedores = await _context.Fornecedores
                    .ProjectTo<FornecedorDto>(_mapper.ConfigurationProvider)
                    .OrderBy(item => item.CadastradoEm)
                    .ToListAsync(cancellationToken),
                Empresas = await _context.Empresas
                    .ProjectTo<EmpresaDto>(_mapper.ConfigurationProvider)
                    .OrderBy(item => item.Nome)
                    .ToListAsync(cancellationToken)
            };
        }
    }
}
