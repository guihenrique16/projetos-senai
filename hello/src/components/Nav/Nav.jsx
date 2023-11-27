import React,{useContext} from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../../context/ThemeContext';

const Nav = () => {
    const{theme, setTheme} = useContext(ThemeContext);
    function alterarTema() {
        setTheme(theme === 'light' ? 'dark' : 'light')
    }
    return (
        <div>
            <Link to="/">Home</Link> | &nbsp;
            <Link to="/produtos">produtos</Link> | &nbsp;
            <Link to="/Importante">Importante</Link> | &nbsp;
            <Link to="/meus-pedidos">Meus pedidos</Link> | &nbsp;
            <Link to="/login">login</Link> | &nbsp;
            <button onClick={alterarTema}>{theme}</button>
        </div>
    );
};

export default Nav;