using Application.Common.Interfaces;
using Application.Empresas.Queries.GetEmpresa;
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

namespace Application.Empresas.Queries.GetEmpresas
{
    public class GetEmpresasQuery : IRequest<EmpresasVm>
    {
    }

    public class GetEmpresasQueryHandler : IRequestHandler<GetEmpresasQuery, EmpresasVm>
    {
        private readonly IAppDbContext _context;
        private readonly IMapper _mapper;

        public GetEmpresasQueryHandler(IAppDbContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        public async Task<EmpresasVm> Handle(GetEmpresasQuery request, CancellationToken cancellationToken)
        {
            return new EmpresasVm
            {
                Empresas = await _context.Empresas
                    .ProjectTo<EmpresaDto>(_mapper.ConfigurationProvider)
                    .OrderBy(item => item.NomeFantasia)
                    .ToListAsync(cancellationToken)
            };
        }
    }
}
