import React,{useContext} from 'react';
import { ThemeContext } from '../../context/ThemeContext';


const MeusPedidosPage = () => {
    const{theme} = useContext(ThemeContext)
    return (
        <div>
            <h1>Meus pedidos</h1>
            <h2>Pagina privada</h2>
            <span>tema Atual: {theme}</span>
        </div>
    );
};

export default MeusPedidosPage;