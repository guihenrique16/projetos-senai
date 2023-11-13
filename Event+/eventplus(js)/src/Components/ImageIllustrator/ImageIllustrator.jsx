import React from 'react';
import './ImageIllustrator.css'
import imageDefault from '../../assets/images/default-image.jpeg';

const ImageIllustrator = ({alterText ,imageRender = imageDefault, additionalClass=""}) => {
    return (
        <figure className='illutrator-box'>
            <img className={`illutrator-box__image ${additionalClass}`} 
            src={imageRender} 
            alt={alterText} 
            />
        </figure>
    );
};

export default ImageIllustrator;