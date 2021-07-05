import BooksList from '../container/BooksList';
import BooksForm from '../container/BooksForm';
import Nav from './Nav';

function App() {
  return (
    <div className="App bg-light">
      <Nav />
      <BooksList />
      <BooksForm />
    </div>
  );
}

export default App;
