using System.Web.Http;
using BitBooks.WebApi.DataAccess;
using BitBooks.WebApi.Models;

namespace BitBooks.WebApi.Controllers
{
    [RoutePrefix("books")]
    public class BookController : ApiController
    {
        private readonly IBookRepository _repository;

        public BookController(IBookRepository repository)
        {
            _repository = repository;
        }

        [Route("")]
        [HttpGet]
        public IHttpActionResult Get()
        {
            return this.Ok(_repository.GetAllBooks());
        }


        [Route("")]
        [HttpPost]
        public void Post([FromBody]Book book)
        {
            _repository.AddBook(book);
        }
    }
}
