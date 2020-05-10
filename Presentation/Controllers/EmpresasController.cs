using Application.Empresas.Commands.CreateEmpresa;
using Application.Empresas.Queries.GetEmpresa;
using Application.Empresas.Queries.GetEmpresas;
using Microsoft.AspNetCore.Mvc;
using Presentation.Models;
using System.Threading.Tasks;

namespace Presentation.Controllers
{
    public class EmpresasController : ApiController
    {
        [HttpGet]
        public async Task<Response<EmpresasListVm>> Get()
        {
            return await BasicRequestHandler(Mediator.Send(new GetEmpresasListQuery()));
        }

        [HttpGet("{id}")]
        public async Task<Response<EmpresaDetailVm>> Get(int id)
        {
            return await BasicRequestHandler(Mediator.Send(new GetEmpresaDetailQuery { Id = id }));
        }

        [HttpPost]
        public async Task<Response<int>> Post(CreateEmpresaCommand command)
        {
            return await BasicRequestHandler(Mediator.Send(command));
        }
    }
}
