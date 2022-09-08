import IBook from "../interfaces/IBook";

class BookService {
    backendUrl: string = "https://localhost:7163/api/book";

    async getBooks(): Promise<Array<IBook>> {
        let response = await fetch(this.backendUrl + "/list");
        let books: Promise<Array<IBook>> = await response.json() as Promise<Array<IBook>>;
        return books;
    }

    deleteBook(id: number) {
        fetch(this.backendUrl + "/" + id, {method: 'DELETE'});
    }

    addBook(book: IBook) {
        fetch(this.backendUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(book)
        });
    }

    editBook(book: IBook) {
        fetch(this.backendUrl, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(book)
        });
    }
}

export default BookService;