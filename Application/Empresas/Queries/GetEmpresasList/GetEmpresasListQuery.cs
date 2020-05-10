using Application.Common.Interfaces;
using AutoMapper;
using AutoMapper.QueryableExtensions;
using MediatR;
using Microsoft.EntityFrameworkCore;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;

namespace Application.Empresas.Queries.GetEmpresas
{
    public class GetEmpresasListQuery : IRequest<EmpresasListVm>
    {
    }

    public class GetEmpresasQueryListHandler : IRequestHandler<GetEmpresasListQuery, EmpresasListVm>
    {
        private readonly IAppDbContext _context;
        private readonly IMapper _mapper;

        public GetEmpresasQueryListHandler(IAppDbContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        public async Task<EmpresasListVm> Handle(GetEmpresasListQuery request, CancellationToken cancellationToken)
        {
            return new EmpresasListVm
            {
                Empresas = await _context.Empresas
                    .ProjectTo<EmpresaDto>(_mapper.ConfigurationProvider)
                    .OrderBy(item => item.NomeFantasia)
                    .ToListAsync(cancellationToken)
            };
        }
    }
}
