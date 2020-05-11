using Application.Common.Interfaces;
using AutoMapper;
using AutoMapper.QueryableExtensions;
using MediatR;
using Microsoft.EntityFrameworkCore;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;

namespace Application.Fornecedores.Queries.GetFornecedorDetail
{
    public class GetFornecedorDetailQuery : IRequest<FornecedorDetailVm>
    {
        public int Id { get; set; }
    }

    public class GetFornecedorDetailQueryHandler : IRequestHandler<GetFornecedorDetailQuery, FornecedorDetailVm>
    {
        private readonly IAppDbContext _context;
        private readonly IMapper _mapper;

        public GetFornecedorDetailQueryHandler(IAppDbContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        public async Task<FornecedorDetailVm> Handle(GetFornecedorDetailQuery request, CancellationToken cancellationToken)
        {
            return await _context.Fornecedores.Where(item => item.Id == request.Id)
                .ProjectTo<FornecedorDetailVm>(_mapper.ConfigurationProvider)
                .FirstOrDefaultAsync(cancellationToken);
        }
    }
}
