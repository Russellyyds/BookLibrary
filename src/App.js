
import { Provider } from 'react-redux'
import store from './redux/store'
import './App.css'
import BookList from './components/BookList';
import AddBook from './components/AddBook';
function App() {
  return (
    <Provider store={store}>
      <div className='App'>
        <h1>BOOK LIBRARY</h1>
        <BookList />
        <AddBook/>
      </div>
    </Provider>)
}

export default App;
