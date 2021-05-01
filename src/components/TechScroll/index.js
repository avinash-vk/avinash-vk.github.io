import React from 'react'
import './styles.css';

const TechScroll = () => {

    const technologies = [
        "https://firebase.google.com/downloads/brand-guidelines/PNG/logo-standard.png",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Node.js_logo_2015.svg/1280px-Node.js_logo_2015.svg.png",
        "https://www.metaltoad.com/sites/default/files/styles/large_personal_photo_870x500_/public/2020-05/react-js-blog-header.png?itok=VbfDeSgJ",
        "https://miro.medium.com/max/901/1*GkrYGz_r9W6AVgEloQpJFQ.png",
        "https://miro.medium.com/max/480/1*MCpM5idqhNRjoWCfb_60OA.png",
        "https://download.logo.wine/logo/Google_Cloud_Platform/Google_Cloud_Platform-Logo.wine.png",
        "https://www.panduz.net/wp-content/uploads/2021/02/aws-logo.jpg",
        "https://miro.medium.com/max/1000/1*G9aVAI3aezHLw_JsiCfB1Q.jpeg",
        "https://tech.pelmorex.com/wp-content/uploads/2020/10/flutter.png",
        "https://webassets.mongodb.com/_com_assets/cms/MongoDB_Logo_FullColorBlack_RGB-4td3yuxzjs.png",
        "https://miro.medium.com/max/666/1*yGrOUQyqX3MBekvP5d-pCA.png",
        "https://cdn.artandlogic.com/wp-content/uploads/django.jpeg"
    ]

    return (
        <div className="tech-scroll-container">
            <div className="tech-container">
                {
                    technologies.map(tech => <img src={tech} alt='logo' />)
                }
            </div>
        </div>
    )
}

export default TechScroll
