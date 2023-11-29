
import './App.css';
import { Provider } from 'react-redux';
import SearchBar from './components/SearchBar';
import store from './utils/store';

function App() {
  return (
    <Provider store={store}>
      
        <SearchBar />
      
    </Provider>
  );
}

export default App;
