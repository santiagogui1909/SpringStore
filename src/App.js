import Routers from './Router/index';
import ProductsProvider from './Context/Provider';
import "./fontello/css/fontello.css";

import './App.css';

function App() {

  return (
    <ProductsProvider>
      <Routers />
    </ProductsProvider>
  );
}

export default App;
