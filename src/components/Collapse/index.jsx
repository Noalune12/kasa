import React, { useState } from 'react'
import ArrowLeft from '../../assets/arrow-left.svg'
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
        contentList = <li>{content}</li>;
    }


    return (
        <div className='collapse'>
            <button className='collapse-toggle'>
                <h2>{title}</h2>
                {/* {isOpen ? <img onClick={toggleCollapse} src={ArrowLeft} alt='Flèche vers le bas' className='arrow-hide'/>
                 : <img onClick={toggleCollapse} src={ArrowLeft} alt='Flèche vers le haut' className='arrow-show'/>} */}
                <img src={ArrowLeft} alt='Flèche' className={`arrow ${isOpen ? 'open' : ''}`} onClick={toggleCollapse}/>
            </button>
            <div className={`collapse-content ${isOpen ? 'show' : ''}`}>
                {isOpen && <ul>{contentList}</ul>}
            </div> 
        </div>
    );
}

export default Collapse;