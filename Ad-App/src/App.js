import React, { useReducer, useState } from 'react';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';

import HomePage from './HomePage.js';
import Navbar from './Navbar.js';
import Footer from './Footer.js';
import CreateAd from './CreateAd.js';



const App = props => {
    return(
    <Router>
     <Navbar/>
     <Routes>
         <Route path='/' exact element={<HomePage/>}/> 
         <Route path='/create-ad' exact element={<CreateAd/>}/>
    </Routes>
     <Footer/>
    </Router>)
}



export default App;