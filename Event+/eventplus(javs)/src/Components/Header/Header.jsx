import React, { useState } from 'react';
import './Header.css'
import { Link } from 'react-router-dom';
import Container from '../Container/Container'
import Nav from '../../Components/Nav/Nav'
import menuBar from '../../assets/images/images/menubar.png'
import PerfilUsuario from '../PerfilUsuario/PerfilUsuario';

const Header = () => {
    const [exibeNavbar, setExibeNavbar] = useState(false);
    return (
        <header className='headerpage'>
            <Container>
                <div className='header-flex'>
                    <img className='headerpage__menubar' src={menuBar} alt="Exibe ou esconde o menu no smartphone" 
                    onClick={() =>{setExibeNavbar(true)}}/>
                    
                    <Nav 
                    exibeNavbar={exibeNavbar}
                    setExibeNavbar={setExibeNavbar}
                    />

                    <PerfilUsuario />
                </div>
            </Container>

        </header>
    );
};

export default Header;