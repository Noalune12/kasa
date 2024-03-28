import React, { useState } from 'react'
import ArrowLeft from '../../assets/arrow-left.svg'
import './style.scss'

function Slideshow ({images}) {
    const [current, setCurrent] = useState(0);

    const nextSlide = () => {
        setCurrent(current === images.length -1 ? 0 : current + 1);
    }

    const prevSlide = () => {
        setCurrent(current === 0 ? images.length - 1 : current - 1);
    }

    return (
        <div className='slideshow'>
            {images.length > 1 && (
                <img src={ArrowLeft} className='left-arrow' onClick={prevSlide} alt='Previous'/>
            )}
            {images.length > 1 && (
                <img src={ArrowLeft} className='right-arrow' onClick={nextSlide} alt='Next'/>
            )}
            {images.map((image, index) => (
                <div key={index} className={index === current ? 'slide active' : 'slide'}>
                    {index === current && <img key={index} src={image} alt={`${index}`}/>}
                </div>                              
            ))}
        </div>
    );
}

export default Slideshow