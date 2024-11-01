import React from 'react';
import './App.css';
import Cabecalho from './Componentes/Cabecalho';
import Hero from './Componentes/Hero';
import Beneficios from './Componentes/Beneficios';
import NossoProcesso from './Componentes/NossoProcesso';
import Depoimentos from './Componentes/Depoimentos';
import Portfolio from './Componentes/Portifolio';
import CTAFinal from './Componentes/CTAFinal';
import Rodape from './Componentes/Rodape';
import Formulario from './Componentes/Formulario';

function App() {
    return (
        <div className="App">
            <Cabecalho />
            <Hero />
            <Beneficios />
            <NossoProcesso />
            <Depoimentos />
            <Portfolio />
            <CTAFinal />
            < Formulario />
            <Rodape />

        </div>
    );
}

export default App;