using Application.Common.Interfaces;
using Application.Empresas.Queries.GetEmpresas;
using AutoMapper;
using AutoMapper.QueryableExtensions;
using MediatR;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace Application.Empresas.Queries.GetEmpresa
{
    public class GetEmpresaQuery : IRequest<EmpresaVm>
    {
        public int Id { get; set; }
    }

    public class GetEmpresaQueryHandler : IRequestHandler<GetEmpresaQuery, EmpresaVm>
    {
        private readonly IAppDbContext _context;
        private readonly IMapper _mapper;

        public GetEmpresaQueryHandler(IAppDbContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        public async Task<EmpresaVm> Handle(GetEmpresaQuery request, CancellationToken cancellationToken)
        {
            return await _context.Empresas.Where(item => item.Id == request.Id)
                .ProjectTo<EmpresaVm>(_mapper.ConfigurationProvider)
                .FirstOrDefaultAsync(cancellationToken);
        }
    }
}
