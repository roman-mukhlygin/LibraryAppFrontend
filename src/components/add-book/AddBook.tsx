import { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import IAuthor from "../../interfaces/IAuthor";
import IGenre from "../../interfaces/IGenre";
import AuthorService from "../../services/AuthorService";
import BookService from "../../services/BookService";
import GenreService from "../../services/GenreService";
import './AddBook.css';

function AddBook() {
    let bookService: BookService = new BookService();
    let genreService: GenreService = new GenreService();
    let authorService: AuthorService = new AuthorService();

    const [id] = useState(0);
    const [name, setName] = useState('');
    const [year, setYear] = useState('');
    const [author, setAuthor] = useState('');
    const [genre, setGenre] = useState('');

    const [genres, setGenres] = useState<Array<IGenre>>([]);
    const [authors, setAuthors] = useState<Array<IAuthor>>([]);
    useEffect(() => {
      genreService.getGenres().then((responce) => {setGenres(responce)});
      authorService.getAuthors().then((responce) => {setAuthors(responce)});
    }, []);

    function handleSubmit(event: React.FormEvent) {
        event.preventDefault();
        bookService.addBook({id: id, name: name, year: year, genre: genre, author: author});
    }

    return (
    <Form onSubmit={(event) => handleSubmit(event)} className="add-form">
      <Form.Group className="mb-3" controlId="BookId">
        <Form.Label>Id</Form.Label>
        <Form.Control value={id} disabled/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="BookName">
        <Form.Label>Name</Form.Label>
        <Form.Control value={name} onChange={(event) => {setName(event.target.value)}}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="BookYear">
        <Form.Label>Year</Form.Label>
        <Form.Control value={year} onChange={(event) => {setYear(event.target.value)}}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="BookAuthor">
        <Form.Label>Author</Form.Label>
        <Form.Select value={author} onChange={(event) => {setAuthor(event.target.value)}}>
          <option>Выберите автора</option>
          {authors.map((item:IAuthor) => <option value={item.name}>{item.name}</option>)}
        </Form.Select>
      </Form.Group>

      <Form.Group className="mb-3" controlId="BookGenre">
        <Form.Label>Genre</Form.Label>
        <Form.Select value={genre} onChange={(event) => {setGenre(event.target.value)}}>
          <option>Выберите жанр</option>
          {genres.map((item:IGenre) => <option value={item.name}>{item.name}</option>)}
        </Form.Select>
      </Form.Group>

      <Button variant="primary" type="submit">
        Добавить
      </Button>
    </Form>
  );
}

export default AddBook;