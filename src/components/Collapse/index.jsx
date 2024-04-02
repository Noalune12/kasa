import React, { useRef, useState, useEffect } from 'react'
import ArrowLeft from '../../assets/arrow-left.svg'
import './style.scss'


function Collapse({title, content}) {
    const [isOpen, setIsOpen] = useState(false);
    const contentCollapse = useRef(null);
    const [height, setHeight] = useState('0px');

    useEffect(() => {
        setHeight(isOpen ? `${contentCollapse.current.scrollHeight}px` : '0px');
    }, [isOpen]);

    const toggleCollapse = () => {
        setIsOpen(!isOpen);
        // setHeight (isOpen === false
        //     ? '0px'
        //     : `${contentCollapse.current.scrollHeight}px`
        //     )
    };
    console.log(height)

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
            <div ref={contentCollapse} className={`collapse-content ${isOpen ? 'show' : '' } `} style={{height: `${height}`}} >
                <div className={`collapse-text ${isOpen ? 'show' : '' } `}>
                    {isOpen && <ul>{contentList}</ul>}
                </div>
            </div>
        </div>
    );
}

export default Collapse;