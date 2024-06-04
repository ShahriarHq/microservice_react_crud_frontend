import React from 'react';

import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Products from './admin/products';
import Main from './main/Main'

function App() {
  return (

    <div className="App">
            {/* npm i react-router-dom @types/react-router-dom  */}

            <BrowserRouter>
              <Routes>
                <Route path='/' element= {<Main/>}/>
                <Route path="/admin/products" element={<Products />} />
              </Routes>
            </BrowserRouter>

            </div>
   
  );
}

export default App;