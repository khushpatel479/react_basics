import logo from './logo.svg';
import './App.css';
import Sub from './Sub';
import Form from './Form';
import Lay from './Lay';
import Notes from './Notes';
import Shop from './Shop';
import Cart from './Cart';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
function App() {
  return (
      <BrowserRouter>
        <Routes>
        <Route index element={<Lay/>}></Route>
          <Route path='/form' element={<Form/>}>  </Route>
          <Route path='/sub' element={<Sub/>}></Route>
          <Route path='/notes' element={<Notes/>}></Route>
          <Route path='/shop' element={<Shop/>}></Route>
          <Route path='/cart' element={<Cart/>}></Route>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
