import React,{useContext} from 'react';
import { ThemeContext } from '../../context/ThemeContext';


const ImportantePage = () => {
    const{theme} = useContext(ThemeContext)
    return (
        <div>
            <h1>Pagina de dados importantes</h1>
            <span>tema Atual: {theme}</span>
        </div>
    );
};

export default ImportantePage;