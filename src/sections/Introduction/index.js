import React from 'react'
import './styles.css'

import Profile from '../../assets/profile.jpg';
import wavingHand from '../../assets/wavingHand.gif';
import { Grid, Avatar, Grow, Fade } from '@material-ui/core';
import { CustomButton, CustomIconButton } from '../../components/Button';
import { Mail, GitHub, Linkedin} from 'react-feather';

import $ from 'jquery';

const Introduction = () => {
    
    const openLink = (link) => {
        window.open(link, "_blank");
    }

    return (
        <Grid container className="introduction-container" direction="row">
            <Grid item xs={0} md={1}>

            </Grid>
            <Grow 
            in={true}
            timeout={2000}
            direction="up">
                <Grid item md={5} xs={12}>
                    <p className="introduction-greeting-text"><img src={wavingHand} alt="logo" height={40}/> Hi, </p>
                    <p className="introduction-header-text">I’m Avinash.</p>
                    <p className="introduction-description-text">I am a web and app developer, currently  pursuing an Computer Science engineering degree from Bangalore, India.</p>
                    <div className="introduction-button-container">
                        <CustomButton onClick={()=>openLink("https://drive.google.com/file/d/1GgmiHPE8dO_gxsOJgb3iD5AzwoyWZNPz/view?usp=sharing")} style={{backgroundColor : "#F8B24A", color:'#FFF' }}> Resume</CustomButton>
                        <CustomButton onClick={()=>{$('html, body').animate({
                                                        scrollTop: $("#projects").offset().top
                                                    }, 2000);}} style={{backgroundColor : "#FFF", color:'#000', marginLeft:12 }}> Projects</CustomButton>
                    </div>
                </Grid>
            </Grow>
            
                <Grid item container md={5} style={{alignItems:'center', justifyContent:'center'}} direction="column">
            <Fade
            in={true}
            timeout={2000}
            direction="up"><Avatar src={Profile} alt={"profile image"} style={{height:'18rem',width:'18rem'}} /></Fade>
                    <div className="introduction-social-container">
                        {
                            [[<Mail size={'1.2rem'} />, "https://mail.google.com/mail/?view=cm&fs=1&to=avinash2000vk@gmail.com"], 
                             [<GitHub size={'1.2rem'} />, "https://github.com/avinash-vk"], 
                             [<Linkedin size={'1.2rem'} />, "https://linkedin.com/in/avinash-vk"],
                            ].map((Icon,idx) => 
                                <CustomIconButton onClick={()=>openLink(Icon[1])} style={{marginLeft:idx===0?0:12}}>
                                    {Icon[0]}
                                </CustomIconButton>
                            )
                        }
                        <p className="introduction-small-text">Connect with me</p>
                    </div>
                </Grid>
            
            <Grid item xs={0} md={1}>  

            </Grid>
        </Grid>
    )
}

export default Introduction
