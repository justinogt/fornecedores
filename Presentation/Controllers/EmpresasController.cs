using Application.Empresas.Commands.CreateEmpresa;
using Application.Empresas.Commands.DeleteEmpresa;
using Application.Empresas.Queries.GetEmpresaDetail;
using Application.Empresas.Queries.GetEmpresasList;
using Microsoft.AspNetCore.Mvc;
using Presentation.Models;
using System;
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

        [HttpDelete]
        public async Task<Response<bool>> Delete(DeleteEmpresaCommand command)
        {
            return await BasicRequestHandler(Mediator.Send(command));
        }
    }
}
