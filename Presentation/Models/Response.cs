using System.Collections.Generic;

namespace Presentation.Models
{
    public static class STATUS
    {
        public const string SUCCESS = "success";
        public const string ERROR = "error";
    }

    public class BasicError
    {
        public string Property { get; set; }
        public string Message { get; set; }
    }

    public class Response<T>
    {
        public string Status { get; set; }
        public T Data { get; set; }
        public List<BasicError> Errors { get; set; }

        public Response()
        {
            Errors = new List<BasicError>();
        }
    }
}
