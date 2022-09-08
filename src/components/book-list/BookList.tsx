import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import IBook from "../../interfaces/IBook";
import BookService from "../../services/BookService";
import GenreService from "../../services/GenreService";
import BookCard from "../book-card/BookCard";
import './BookList.css';

function BookList() {
    let bookService: BookService = new BookService();

    const [books, setBooks] = useState<Array<IBook>>([]);
    useEffect(() => {
        bookService.getBooks().then((responce) => {setBooks(responce)});
    }, []);

    function deleteBook(id: number) {
        setBooks(books.filter(book => book.id !== id));
        bookService.deleteBook(id);
    }

    return (
        <div>
            <div className="book-container">
                {books.map((book:IBook) => <BookCard key={book.id} book={book} deleteBook={deleteBook}></BookCard>)}
            </div>
            <div className="text-center">
                <Link to='/add'><Button variant="outline-success" >Добавить</Button></Link>
            </div>
        </div>
    );

}

export default BookList;