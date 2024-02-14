import logo from './logo.svg';
import './App.css';
import { RouterProvider } from 'react-router-dom';
import { routes } from './component/Routes/Routes';
import ProductsProvider from './Context/ProductsProvider';



function App() {




  return (
    <div className="App bg-white ">
      <ProductsProvider>
      <RouterProvider router={routes}></RouterProvider>
      </ProductsProvider>
    </div>
  );
}

export default App;
