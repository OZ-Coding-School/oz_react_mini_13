import React from 'react';
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MovieDetail from './components/MovieDetail.jsx';
import './index.css'

createRoot(document.getElementById('root')).render(
  
    <BrowserRouter>
     <Routes>
       <Route path='/'element={<App />}/>
       <Route path='/details/:id'element={<MovieDetail />}/>
      </Routes>
    </BrowserRouter>
    
)
