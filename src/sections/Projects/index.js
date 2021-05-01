import React, { useEffect, useState, useRef } from 'react';
import './styles.css';

import { Grid,  Card } from '@material-ui/core';

const ProjectCard = ({title, date, description,stack}) => {
    return (
        <Card className={`project-card`}>
            <p className="project-card-title"><b>{title}</b></p>
            <p className="project-card-date">{date}</p>
            <p className="project-card-description">{description}</p>
            <div className="project-card-stack-container">
                {
                    stack.map(tech => 
                        <div className="project-stack-tag">
                            {tech}
                        </div>
                    )
                }
            </div>
        </Card>
    );
}

const Projects = () => {

    const projects = [
        {
            title:"Memorai",
            date:"July 2020",
            description:"Worked with Graphql, Firebase, React and CI/CD technologies to build a web application in an agile workflow.memorAi is an application aimed at helping individuals diagnosed with alzheimers disease. The app helps patients keep track of their tasks,medicines,close family friends and relatives. The app has an chatbot service leveraging the wit.ai platform for easier conversation between the patient and memorAi. The chatbot helps schedule tasks,remind medicines and records sentiments of the patient.",
            stack:["Flutter", "Flask", "Azure", "Firebase"],
            link:"https://github.com/avinash-vk/memorAi"
        },
        {
            title:"Promanage.",
            date:"Feb 2021",
            description:"A project management dashboard where an user can maintain their environments (.env files) and share it among collaborators with the help of promanage-cli.",
            stack:["ReactJS","Express","Node-cli"],
            link:"https://github.com/avinash-vk/promanage"
        },
        {
            title:"Meraki",
            date:"Oct 2020",
            description:"A web app leveraging the capabilities of Nginx and azure, that bridges the gap between job seekers and employers, through stories and helping out the less fortunate with better lives through community involvement.",
            stack:["ReactJS", "Nginx", "Docker", "Azure"],
            link:"https://github.com/avinash-vk/meraki"
        },
        {
            title:"Algobot",
            date:"Jan 2021",
            description:"A discord bot that helps bring in motivation to solve competitive coding questions scraped from leetcode and maintaining a leaderboard within discord servers.",
            stack:["DiscordJS", "NodeJS"],
            link:"https://github.com/avinash-vk/algobot"
        },
        {
            title:"Take-care",
            date:"Apr 2020",
            description:"A social network platform based on reaching your fitness goals, by keeping track of your health, exercises in real time and helps you follow trainers to like/comment on their posts. You can create your fitness portfolios, upload posts, videos or workouts and share your favourite Spotify playlists. The site also recommends your content based on your interaction with the website.",
            stack:["ReactJS", "Django", "SpotifyAPI", "GoogleFit"],
            link:"https://github.com/avinash-vk/webframeworksproject"
        },
        {
            title:"Combat Covid",
            date:"May 2020",
            description:"Developed a set of 3 mobile applications in Flutter and a web based Dashboard for solving COVID-19 pandemic issues regarding people to enable location tracking of citizens.",
            stack:["Flutter", "Flask"],
            link:"https://github.com/srujandeshpande/combat_covid"
        },
    ]

    const ref = useRef()

    return (
        <div className="project-container" ref={ref}>
            <h2 className="project-header">My Favourite Projects. 📁</h2>
            <Grid container className="hide-scroll" spacing={1} style={{overflowY: 'auto', margin:"2%",padding:'2%'}}>
                {
                    projects.map(project => 
                        <Grid item container xs={12} md={6} lg={6}>
                            <ProjectCard {...project} />
                        </Grid>    
                    )
                }
            </Grid> 
        </div>
        
    )
}

export default Projects
