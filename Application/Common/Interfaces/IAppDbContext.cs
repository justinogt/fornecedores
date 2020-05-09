using Domain.Entities;
using Microsoft.EntityFrameworkCore;
using System.Threading;
using System.Threading.Tasks;

namespace Application.Common.Interfaces
{
    public interface IAppDbContext
    {
        DbSet<Empresa> Empresas { get; set; }
        DbSet<Fornecedor> Fornecedores { get; set; }
        DbSet<Telefone> Telefones { get; set; }

        Task<int> SaveChangesAsync(CancellationToken cancellationToken);
    }
}
