using Application.Common.Dtos.Empresas;
using Application.Common.Interfaces;
using AutoMapper;
using AutoMapper.QueryableExtensions;
using MediatR;
using Microsoft.EntityFrameworkCore;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;

namespace Application.Fornecedores.Queries.GetFornecedoresList
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
                    .ProjectTo<FornecedorListItem>(_mapper.ConfigurationProvider)
                    .OrderByDescending(item => item.CriadoEm)
                    .ToListAsync(cancellationToken),
                Empresas = await _context.Empresas
                    .ProjectTo<EmpresaSimple>(_mapper.ConfigurationProvider)
                    .OrderBy(item => item.NomeFantasia)
                    .ToListAsync(cancellationToken)
            };
        }
    }
}
