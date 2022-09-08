import './App.css';
import Navigation from './components/navigation/Navigation';
import 'bootstrap/dist/css/bootstrap.css';
import BookList from './components/book-list/BookList';
import AddBook from './components/add-book/AddBook';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import EditBook from './components/edit-book/EditBook';

function App() {
  return (
    <div>
      <Navigation/>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BookList/>}>
        </Route>
        <Route path="/add" element={<AddBook/>}>
        </Route>
        <Route path="/edit" element={<EditBook/>}>
        </Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
