import React, { useState } from 'react'
import ArrowUp from '../../assets/arrow-up.png'
import ArrowDown from '../../assets/arrow-down.png'
import './style.scss'


function Collapse({title, content}) {
    const [isOpen, setIsOpen] = useState(false);
    const toggleCollapse = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className='collapse'>
            <button className='collapse-toggle'>
                <h2>{title}</h2>
                {isOpen ? <img onClick={toggleCollapse} src={ArrowDown} alt='Flèche vers le bas'/> : <img onClick={toggleCollapse} src={ArrowUp} alt='Flèche vers le haut'/>}
            </button>
            {isOpen && <p>{content}</p>}
        </div>
    );
}

export default Collapse;