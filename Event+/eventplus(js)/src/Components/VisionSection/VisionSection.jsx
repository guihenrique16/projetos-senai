import React from 'react';
import Title from '../Title/Title';
import './VisionSection.css'

const VisionSection = () => {
    return (
        <section className='vision'>
            <div className='vision__box'>
                <Title
                    titleText={"Vision"}
                    color='White'
                    additionalClass='vision__title'
                />

                <p className='vision__text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam fugiat aut id ad. Voluptates, quo dolorem et neque ex odio, totam corporis eligendi necessitatibus reprehenderit omnis magnam quisquam reiciendis repellat.
                Itaque iusto provident veniam ea, sint amet quidem error ut aspernatur quaerat tenetur ducimus molestiae, natus ab magnam placeat dolore minima, deleniti modi laboriosam distinctio. Illum pariatur iste ratione rerum.</p>
            </div>
        </section>
    );
};

export default VisionSection;