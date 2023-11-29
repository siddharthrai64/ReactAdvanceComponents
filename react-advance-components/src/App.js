
import './App.css';
import { Provider } from 'react-redux';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SearchBar from './components/SearchBar';
import store from './utils/store';
import Layout from './components/Layout';

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <Layout/>,
    children: [
      {
        path: '/search',
        element: <SearchBar />,
      }
    ]
  }
])

function App() {
  return (
    <Provider store={store}>
        <RouterProvider router={appRouter}/>
    </Provider>
  );
}

export default App;
