import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Lighting from './Lighting'
import HomePage from './HomePage';

function Rotas(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<HomePage/>}/>
                <Route path='/lampada' element={<Lighting/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default Rotas;