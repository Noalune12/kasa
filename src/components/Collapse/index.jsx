import React, { useState } from 'react'
import ArrowUp from '../../assets/arrow-up.png'
import ArrowDown from '../../assets/arrow-down.png'
import './style.scss'


function Collapse({title, content}) {
    const [isOpen, setIsOpen] = useState(false);
    const toggleCollapse = () => {
        setIsOpen(!isOpen);
    };

    let contentList
    if (Array.isArray(content)) {
        contentList = content.map((item, index) => (
            <li key={index}>{item}</li>
        ));
    } else {
        contentList = <li>{content}</li>; // Afficher le contenu tel quel s'il n'est pas un tableau
    }


    return (
        <div className='collapse'>
            <button className='collapse-toggle'>
                <h2>{title}</h2>
                {isOpen ? <img onClick={toggleCollapse} src={ArrowDown} alt='Flèche vers le bas'/> : <img onClick={toggleCollapse} src={ArrowUp} alt='Flèche vers le haut'/>}
            </button>
            {isOpen && <ul>{contentList}</ul>}
        </div>
    );
}

export default Collapse;