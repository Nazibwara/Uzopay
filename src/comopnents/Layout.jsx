import React from 'react'
import {Routes, Route} from 'react-router-dom';
import Home from './home/page';
import {BrowserRouter} from 'react-router-dom';


const Layout = () => {
  return (
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
        </Routes>
    </BrowserRouter>
  )
}

export default Layout