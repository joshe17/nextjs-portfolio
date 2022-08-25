import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import Link from 'next/link';
import "animate.css/animate.min.css";
import { AnimationOnScroll } from 'react-animation-on-scroll';
import { TypeAnimation } from 'react-type-animation';
import styles from '../styles/intro.module.css';

//            <h1>hi, it's <span className={styles.firstWordTitle}>josh.</span></h1>


export default function IntroPage() {
    return (
        <div className="sectionContainer">
            <div>
                <TypeAnimation
                    sequence={["hi, it's josh."]}
                    wrapper='div'
                    repeat={0}
                    speed={20}
                    className={styles.typist}
                    cursor={false}
                />
            </div>
            <div class="animate__animated animate__fadeInUp" className={styles.textWrapper} >
                <Box>
                    <p className={styles.introTextBox}>
                        I'm a software engineer and designer from the San Francisco Bay Area.
                        I'm interested in front-end engineering, product management, UI/UX Design, and everything in between.
                    </p>
                </Box>
                <div className={styles.buttonContainer}>
                    <Link href="mailto: joshuaho417@gmail.com">
                        <EmailIcon fontSize='large' color='secondary' className={styles.iconButtons} />
                    </Link>
                    <Link href="https://github.com/joshe17" target="_blank">
                        <GitHubIcon fontSize='large' color='secondary' className={styles.iconButtons} />
                    </Link>
                    <Link href="https://www.linkedin.com/in/joshua-ho17/" target='_blank'>
                        <LinkedInIcon fontSize='large' color='secondary' className={styles.iconButtons} />
                    </Link>
                </div>
            </div>
        </div>
        
        );
}