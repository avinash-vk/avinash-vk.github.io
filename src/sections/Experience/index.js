import React, { useEffect, useState, useRef } from 'react';
import './styles.css';
import '../../components/Termynal/termynal.css';

import { Grid, Hidden, Card, Fade } from '@material-ui/core';
import Termynal from '../../components/Termynal/termynal';
import useOnScreen, { useWindowSize } from '../../utils';
import LineTo from 'react-lineto';


const ExperienceCard = ({id,title, date, description}) => {
    return (
        <Card className={`experience-card exp-${id}`}>
            <p className="experience-card-title"><b>{title}</b></p>
            <p className="experience-card-date">{date}</p>
            <p className="experience-card-description">{description}</p>
        </Card>
    );
}

const Experience = () => {

    const experiences = [
        {
            title:"Backend Developer, Pilot Plans.",
            date:"Aug 2020 - Present",
            description:"Worked with Graphql, Firebase, React and CI/CD technologies to build a web application in an agile workflow."
        },
        {
            title:"Web Developer intern, PESU I/O.",
            date:"Mar 2021 -  Present",
            description:"Worked with Vuejs to develop the frontend for a new feature."
        },
        {
            title:"Web Developer intern, KSP Solutions.",
            date:"Aug 2020 - Sep 2020",
            description:"Worked on developing a fullstack website using Django, setup payment portals and hosted it using apache on a VPS."
        },
    ]
    
    const termRef = useRef()
    const ref = useRef()
    
    const [width, height] = useWindowSize();
    const isVisible = useOnScreen(ref);
    const [isSlided, setIsSlided] = useState(false);

    useEffect(()=>{
        if(!isSlided && isVisible) {
            setIsSlided(true);
            if(termRef.current) new Termynal(termRef.current)
        }
    },[isVisible,width]);

    return (
        <div className="experience-container" ref={ref}>
            
            <h2 className="experience-header">My Work Experience. 👨‍💻</h2>
            <Grid container direction="row">
            
                <Grid item md={8} xs={12}>
                    {
                        experiences.map((experience,id) => <ExperienceCard id={id} {...experience} />)
                    }
                    {
                        experiences.map((_,id) => {
                            if(id==0) return;
                            return  <LineTo from={`exp-${id}`} to={`exp-${id-1}`} zIndex={-1} borderWidth={4} borderStyle="dashed" borderColor="#000" />
                        })
                    }
                    
                </Grid>
                <Hidden smDown>
                    <Grid item md={4} container alignItems="center">
                        <div id="termynal" ref={termRef}>
                            <span data-ty="input">echo "coolest coder"</span>
                            <span data-ty>Avinash 😎 </span>
                        </div>
                    </Grid>
                </Hidden>
            </Grid> 
        </div>
        
    )
}

export default Experience
