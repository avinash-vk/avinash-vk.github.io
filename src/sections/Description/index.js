import React,{useRef,useState,useEffect} from 'react'
import './styles.css'

import { Fade } from '@material-ui/core';
import TechScroll from '../../components/TechScroll';
import useOnScreen from '../../utils';

const Description = () => {
    const ref = useRef()
    const isVisible = useOnScreen(ref);
    const [isFaded, setIsFaded] = useState(false);

    useEffect(()=>{
        if(!isFaded && isVisible) setIsFaded(true);
    },[isVisible]);
    
    return (
        <Fade in={isFaded} timeout={2000} direction="up">
            <div className="description-container"><div ref={ref}></div>
                <h2 className="description-header">My Journey. 🚀</h2>
                <p className="description-content">I started coding late in high school, where I took up Java as my first programming language to build mini console based games and some typical management systems for my school projects. Later took up python and build on it as my core language. Fast forward many years, I currently expertise on building websites mainly using javascript and its various frameworks, and sometimes build mobile applications and some bots. I love testing out new frameworks and technologies and exploiting various APIs to make the best use of it. Lately, I’ve been participating in various hackathons and coding challenges and it motivates me to build further and sharpen my development skills. 
                <br/><br/>Here are some technologies I expertise in.</p>
                <TechScroll />
            </div>
        </Fade>
    )
}

export default Description
