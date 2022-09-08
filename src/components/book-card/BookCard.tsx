import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './BookCard.css';
import IBook from '../../interfaces/IBook';
import { Link } from 'react-router-dom';

function BookCard({book, deleteBook}: IBookCardProps ) {
    return (
        <Card>
            <Card.Body>
                <Card.Text>
                    <p>Id: {book.id}</p>
                    <p>Name: {book.name}</p>
                    <p>Year: {book.year}</p>
                    <p>Author: {book.author}</p>
                    <p>Genre: {book.genre}</p>
                </Card.Text>
                <Card.Link><Link to='edit' state={{book: book}}><Button variant="outline-primary">Редактировать</Button></Link></Card.Link>
                <Card.Link><Button variant="outline-danger" onClick={() => deleteBook(book.id)}>Удалить</Button></Card.Link>
            </Card.Body>
        </Card>
    );
}

interface IBookCardProps {
    book: IBook,
    deleteBook: (id: number) => void;
}

export default BookCard;