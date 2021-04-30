import React from 'react'
import './styles.css'

import Profile from '../../assets/profile.jpg';
import wavingHand from '../../assets/wavingHand.gif';
import { Grid, Avatar } from '@material-ui/core';
import { CustomButton, CustomIconButton } from '../Button';
import { Mail, GitHub, Linkedin} from 'react-feather';

const Introduction = () => {
    return (
        <Grid container className="introduction-container" direction="row">
            <Grid item xs={1}>

            </Grid>
            <Grid item md={5} xs={12}>
                <p className="introduction-greeting-text"><img src={wavingHand} alt="logo" height={40}/> Hi, </p>
                <p className="introduction-header-text">I’m Avinash.</p>
                <p className="introduction-description-text">I am a web and app developer, currently  pursuing an Computer Science engineering degree from Bangalore, India.</p>
                <div className="introduction-button-container">
                    <CustomButton style={{backgroundColor : "#F8B24A", color:'#FFF' }}> Resume</CustomButton>
                    <CustomButton style={{backgroundColor : "#FFF", color:'#000', marginLeft:20 }}> Projects</CustomButton>
                </div>
            </Grid>
            <Grid item container md={5} style={{alignItems:'center', justifyContent:'center'}} direction="column">
                <Avatar src={Profile} alt={"profile image"} style={{height:'18rem',width:'18rem'}} />
                <div className="introduction-social-container">
                    {
                        [<Mail size={'1.2rem'} />, <GitHub size={'1.2rem'} />, <Linkedin size={'1.2rem'} />].map(Icon => 
                            <CustomIconButton style={{marginLeft:12}}>
                                {Icon}
                            </CustomIconButton>
                        )
                    }
                    <p className="introduction-small-text">Connect with me</p>
                </div>
            </Grid>
            <Grid item xs={1}>

            </Grid>
        </Grid>
    )
}

export default Introduction
