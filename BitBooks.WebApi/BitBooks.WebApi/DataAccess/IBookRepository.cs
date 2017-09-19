using System.Collections.Generic;
using BitBooks.WebApi.Models;

namespace BitBooks.WebApi.DataAccess
{
    public interface IBookRepository
    {
        IList<Book> GetAllBooks();

        void AddBook(Book book);

    }
}
