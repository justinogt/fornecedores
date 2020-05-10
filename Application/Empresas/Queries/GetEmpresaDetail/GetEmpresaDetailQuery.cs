using Application.Common.Interfaces;
using AutoMapper;
using AutoMapper.QueryableExtensions;
using MediatR;
using Microsoft.EntityFrameworkCore;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;

namespace Application.Empresas.Queries.GetEmpresa
{
    public class GetEmpresaDetailQuery : IRequest<EmpresaDetailVm>
    {
        public int Id { get; set; }
    }

    public class GetEmpresaQueryDetailHandler : IRequestHandler<GetEmpresaDetailQuery, EmpresaDetailVm>
    {
        private readonly IAppDbContext _context;
        private readonly IMapper _mapper;

        public GetEmpresaQueryDetailHandler(IAppDbContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        public async Task<EmpresaDetailVm> Handle(GetEmpresaDetailQuery request, CancellationToken cancellationToken)
        {
            return await _context.Empresas.Where(item => item.Id == request.Id)
                .ProjectTo<EmpresaDetailVm>(_mapper.ConfigurationProvider)
                .FirstOrDefaultAsync(cancellationToken);
        }
    }
}
