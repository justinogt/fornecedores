using Application.Fornecedores.Commands.CreateFornecedor;
using Application.Fornecedores.Queries.GetFornecedores;
using Microsoft.AspNetCore.Mvc;
using Presentation.Models;
using System;
using System.Collections.Generic;
using System.Linq;
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

        [HttpPost]
        public async Task<Response<int>> Post(CreateFornecedorCommand command)
        {
            return await BasicRequestHandler(Mediator.Send(command));
        }
    }
}
