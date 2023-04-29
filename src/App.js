
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Nav from './Component/Nav';
import Product from './Component/Product';
import Products from './Component/Products';

function App() {
  return (
    <div className="App">
    
      <Routes>
      <Route path="/" element={<> <Nav/> <Products/></>} />
      <Route exact path="Products" element={<><Nav/> <Products/></>} />
      <Route exact path="Products/:id" element={ <><Nav/><Product/></> } />
      <Route path = "*" element={<><Nav/><Products/></>}/>
      </Routes>
    </div>
  );
}

export default App;
