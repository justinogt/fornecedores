using FluentValidation;
using MediatR;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.DependencyInjection;
using Presentation.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Presentation.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public abstract class ApiController : ControllerBase
    {
        private IMediator _mediator;

        protected IMediator Mediator => _mediator ??= HttpContext.RequestServices.GetService<IMediator>();

        protected async Task<Response<T>> BasicRequestHandler<T>(Task<T> action)
        {
            try
            {
                return new Response<T>
                {
                    Status = STATUS.SUCCESS,
                    Data = await action
                };
            }
            catch (ValidationException e)
            {
                return new Response<T>
                {
                    Status = STATUS.ERROR,
                    Errors = e.Errors
                        .Select(item => new BasicError
                            { 
                                Property = item.PropertyName,
                                Message = item.ErrorMessage
                            }
                        ).ToList()
                };
            }
            catch (Exception e)
            {
                return new Response<T>
                {
                    Status = STATUS.ERROR,
                    Errors = new List<BasicError>(new BasicError[] { new BasicError { Property = "None", Message = e.Message } })
                };
            }
        }
    }
}
