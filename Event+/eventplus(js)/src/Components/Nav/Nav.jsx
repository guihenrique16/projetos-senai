import React, { useContext } from 'react';
import './Nav.css';
import { Link } from 'react-router-dom';

import logoMobile from '../../assets/images/logo-white.svg';
import logoDesktop from '../../assets/images/logo-pink.svg';
import { UserContext } from '../../context/AuthContext';

const Nav = ( { setExibeNavbar, exibeNavbar } ) => {
    const{userData} = useContext(UserContext)

    return (
        <nav className={`navbar ${exibeNavbar ? "exibeNavbar" : ""}`}>
            <span 
                className='navbar__close' 
                onClick={() => { setExibeNavbar(false) }}
            >
                x
            </span>
            
            <Link to="/">
                <img 
                    className='eventlogo__logo-image' 
                    src={window.innerWidth >= 992 ? logoDesktop : logoMobile}
                    alt="Event Plus Logo"
                    onClick={() => { setExibeNavbar(false) }}
                />
            </Link>

            <div className='navbar__items-box'>
                <Link to="/" className='navbar__item' 
                onClick={() => { setExibeNavbar(false) }}
                >Home</Link>
                {userData.role === "ADM" ? (
                    <>
                        <Link to="/tipo-eventos" className='navbar__item' 
                        onClick={() => { setExibeNavbar(false) }} 
                        >Tipo Eventos</Link>

                        <Link to="/eventos" className='navbar__item'
                        onClick={() => { setExibeNavbar(false) }} 
                        >Eventos</Link>
                    </>
                ):(
                    userData.role ==="Comum"
                    <Link to="/eventos" className='navbar__item'
                        onClick={() => { setExibeNavbar(false) }} 
                        >Eventos</Link>
                )}
                <Link to="/tipo-eventos" className='navbar__item' 
                onClick={() => { setExibeNavbar(false) }} 
                >Tipo Eventos</Link>
                <Link to="/eventos" className='navbar__item'
                onClick={() => { setExibeNavbar(false) }} 
                >Eventos</Link>
                {/* <Link to="/login" className='navbar__item'
                onClick={() => { setExibeNavbar(false) }} 
                >Login</Link> */}
            </div>
        </nav>
    );
};

export default Nav;