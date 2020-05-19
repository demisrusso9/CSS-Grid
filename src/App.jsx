import React from 'react';

// Principal
import Header from './components/principal/Header';
import Main from './components/principal/Main';
import Footer from './components/principal/Footer';
// Sections
import Destaque from './components/sections/Destaques'


import './assets/css/normalize.css'
import './assets/css/reset.css'
import './assets/css/style.css'

export default () =>
    <>
        <Header />

        <Main>
            <Destaque />
        </Main>
        
        <Footer />
    </>
