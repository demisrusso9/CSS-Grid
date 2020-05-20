import React from 'react';

// Principal
import Header from './components/principal/Header';
import Main from './components/principal/Main';
import Footer from './components/principal/Footer';
// Sections
import Destaque from './components/sections/Destaques'
import Populares from './components/sections/Populares'

import './assets/css/normalize.css'
import './assets/css/reset.css'
import './assets/css/style.css'
import './assets/css/responsivo.css'

export default () =>
    <>
        <Header />

        <Main>
            <Destaque />
            <Populares />
        </Main>

        <Footer />
    </>
