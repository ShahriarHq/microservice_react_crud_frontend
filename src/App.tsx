import React from 'react';

import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Products from './admin/products';
import Main from './main/Main'
import { ProductCreate } from './admin/ProductCreate';

function App() {
  return (

    <div className="App">
            {/* npm i react-router-dom @types/react-router-dom  */}

            <BrowserRouter>
              <Routes>
                <Route path='/' element= {<Main/>}/>
                <Route path="/admin/products" element={<Products />} />
                <Route path="/admin/products/create" element={<ProductCreate />} />
              </Routes>
            </BrowserRouter>

            </div>
   
  );
}

export default App;