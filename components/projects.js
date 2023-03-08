import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Image from 'next/image';
import Grid from '@mui/material/Grid';
import styles from '../styles/projects.module.css';
import SourceIcon from '@mui/icons-material/Source';
import "animate.css/animate.min.css";
import { AnimationOnScroll } from 'react-animation-on-scroll';


// Get cards to be inline
//Button on buttom for cardaction to allow for click + icon


const projectCards = {
    'EtherWAN Graphic Design': {
        description: 'A variety of graphics made for EtherWAN Systems - includes social media collateral, GIFs, landing pages, posters, and brochures.',
        link: '/etherwan',
        media: '/images/etherwanCover.png',
        alt: 'social media graphic of wireless bridge device'
    },
    
    'Gallery - An Artist Biography App': {
        description: 'Created mockups, wireframes, and high fidelity prototype of a mobile artist bio app in Figma. Conducted usability tests and research as well for Google UX Design Course.',
        link: 'https://docs.google.com/presentation/d/1ciwXp7CtbcjrVxlM-QxaHSinFJXDH01B_0rLLmv271U/edit?usp=sharing',
        media: '/images/galleryApp.png',
        alt: 'mockups for a mobile app'
    },
    
    'Professional Networking App': {
        description: 'Wireframe and high-fidelity prototype of a professional networking app made in AdobeXD.',
        link: 'https://xd.adobe.com/view/1d71f7aa-52a2-4bbe-85fa-4146c815a3da-4822/',
        media: '/images/networkingApp.png',
        alt: 'home page of networking app'
    },

    'Adobe Creative Jams - Film App': {
        description: 'High-fidelity prototype for a social media application focused on creating online film communities designed in AdobeXD.',
        link: 'https://xd.adobe.com/view/b474dd4e-dd6d-4a81-8a0e-19b4bf5fe448-e127/?fullscreen',
        media: '/images/creativeJams.png',
        alt: 'home page of film app'
    },

    'Travel Video': {
        description: 'Self-filmed and edited travel video utilizing custom-keyframed transitions in Final Cut Pro X.',
        link: 'https://www.youtube.com/watch?v=GP4b7rRNPZY&ab_channel=JoshuaHo',
        media: '/images/italyScreenshot.png',
        alt: 'screenshot of Italy from travel video'
    },

    'Custom Portfolio Site': {
        description: 'GitHub Repo of this website - made in React and NextJS leveraging MaterialUI components and CSS animation.',
        link: 'https://github.com/joshe17/nextjs-portfolio',
        media: '/images/defaultCard.jpg',
        alt: 'dark stock image'
    }

};

export default function ProjectPage() {
    return (
        <div id='projectsSection' className="sectionContainer">
            <h2 className={styles.title}>/projects</h2>
            <AnimationOnScroll animateIn='animate__fadeInUp' animateOnce='true'>
                <Box className={styles.container}
                    sx={{
                        width: '90%',
                        height: '100%',
                        position: 'relative'
                    }}>
                    <Grid
                        container
                        spacing={1}
                        direction="row"
                        alignItems="flex-start"
                        justifyContent="center"
                        //style={{ minHeight: '89vh' }}
                    >
                        {Object.keys(projectCards).map((label, index) => (
                            <Grid key={index} item xs={12} sm={4} align="center">
                                <Card className={styles.projectCards}>
                                    <CardActionArea href={projectCards[label].link} target='_blank' className={styles.cardActions}>
                                        <SourceIcon className={styles.cardIcon} />
                                        <CardMedia className={styles.cardImage}>
                                            <Image src={projectCards[label].media} alt={projectCards[label].alt} height={180} width={310} style={{ borderRadius: 5}}/>
                                        </CardMedia>
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="div" className={styles.cardTitles}>
                                                {label}
                                            </Typography>
                                            <Typography variant="body2" className={styles.descriptions}>
                                                {projectCards[label].description}
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>

                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            </AnimationOnScroll>
        </div>
    );
}
