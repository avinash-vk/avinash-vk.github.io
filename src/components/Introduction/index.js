import React from 'react'
import './styles.css'

import wavingHand from '../../assets/wavingHand.gif';
import { Grid } from '@material-ui/core';
import { CustomButton } from '../Button';

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
            <Grid item md={5} style={{backgroundColor:"blue"}} xs={0}>
                hello
            </Grid>
            <Grid item xs={1}>

            </Grid>
        </Grid>
    )
}

export default Introduction
