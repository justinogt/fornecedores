using Application.Fornecedores.Commands.CreateFornecedor;
using Application.Fornecedores.Commands.DeleteFornecedor;
using Application.Fornecedores.Queries.GetFornecedorDetail;
using Application.Fornecedores.Queries.GetFornecedoresList;
using Microsoft.AspNetCore.Mvc;
using Presentation.Models;
using System.Threading.Tasks;

namespace Presentation.Controllers
{
    public class FornecedoresController : ApiController
    {
        [HttpGet]
        public async Task<Response<FornecedoresListVm>> Get()
        {
            return await BasicRequestHandler(Mediator.Send(new GetFornecedoresListQuery()));
        }

        [HttpGet("{id}")]
        public async Task<Response<FornecedorDetailVm>> Get(int id)
        {
            return await BasicRequestHandler(Mediator.Send(new GetFornecedorDetailQuery() { Id = id }));
        }

        [HttpPost]
        public async Task<Response<int>> Post(CreateFornecedorCommand command)
        {
            return await BasicRequestHandler(Mediator.Send(command));
        }

        [HttpDelete]
        public async Task<Response<bool>> Delete(DeleteFornecedorCommand command)
        {
            return await BasicRequestHandler(Mediator.Send(command));
        }
    }
}
