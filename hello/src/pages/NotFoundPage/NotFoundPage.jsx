import React from 'react';
import {Link} from'react-router-dom'

const NotFoundPage = () => {
    return (
        <>
        <h1>
            Pagina nao encontrada
        </h1>

        <Link to="/">Home</Link>
        </>
    );
};

export default NotFoundPage;