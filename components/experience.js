import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import StepLabel from '@mui/material/StepLabel';
import Step from '@mui/material/Step';
import StepButton from '@mui/material/StepButton';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import "animate.css/animate.min.css";
import { AnimationOnScroll } from 'react-animation-on-scroll';
import styles from '../styles/experience.module.css';

function getSteps() {
    return ['5TEN Motors LLC', 'EtherWAN Systems', 'Alpha Kappa Psi'];
}

function getStepTitle(step) {
    switch (step) {
        case 0:
            return 'Freelance Designer & Web Developer';
        case 1:
            return 'Product Marketing Intern';
        case 2:
            return 'Vice President of Marketing';
        default:
            return "unknown step";
    }
}

function getStepEmployer(step) {
    switch (step) {
        case 0:
            return '5TEN Motors LLC';
        case 1:
            return 'EtherWAN Systems';
        case 2:
            return 'Alpha Kappa Psi';
        default:
            return "unknown step";
    }
}

function getStepDuration(step) {
    switch (step) {
        case 0:
            return 'NOV 2022 - MAR 2023';
        case 1:
            return 'JUN 2021 - SEP 2021';
        case 2:
            return 'OCT 2019 - JUN 2022';
        default:
            return "unknown step";
    }
}

function getStepDescription(step) {
    switch (step) {
        case 0:
            return [
                'Designed and implemented custom website according to client’s needs in Next.js and React',
                'Integrated third-party libraries to help improve UI and handled user input for form data via creation of a custom email form component using Superface',
                'Drew custom logos and created scalable vector graphics for the company in Illustrator and Photoshop'
            ];
        case 1:
            return [
                'Individually lead 10+ marketing campaigns for distributor outlets and produced 75+ pieces of graphic design content for social media/sales channels',
                'Increased new-employee training/onboarding efficiency by over 300% through creation of SOPs for existing and newly-instilled processes',
                'Introduced new systems to enhance UI/UX of company website through addition of 3D product imaging, videos, and interactive landing pages',
                'Worked with Product Management team to help conceptualize, conduct competitor research on, and market 5 new products from inception to launch'
            ];
        case 2:
            return [
                'Raised online visibility and traffic of local business via 5+ customer acquisition strategies outlined in a 12-page marketing plan as a pro-bono consultant',
                'Helped surge Facebook organic views (2,470%), reach (377%), engagements (237%), page likes (735%) via assistance in consistent content creation and frequent page optimization and maintenance',
                'Increased total participants of organization-led events by 50% during the transition to online-hosting via targeted social strategy and community outreach',
            ];
        default:
            return [];
    }
}

//CREATE SEPERATE NONLINEAR STEPPER FOR MOBILE WITH NO BUTTONS

export default function ExperiencePage() {
    const [activeStep, setActiveStep] = React.useState(0);

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleReset = () => {
        setActiveStep(0);
    };

    const handleStep = (step) => () => {
        setActiveStep(step);
    };

    const steps = getSteps();

    return (
        <div id='experienceSection' className="sectionContainer">
            <h2 className={styles.title}>/experience</h2>
            <AnimationOnScroll animateIn='animate__fadeInUp' animateOnce='true'>
                <Box className={styles.boxOuter}>
                    <Box className={styles.boxInner}>
                        <Stepper activeStep={activeStep} alternativeLabel>
                            {steps.map((label, index) => (
                                <Step label={label} key={index}>
                                    <StepLabel className={styles.label}>{label}</StepLabel>
                                </Step>
                            ))}
                        </Stepper>
                        <br />
                        <Typography className={styles.jobTitle}>
                            {getStepTitle(activeStep)}
                        </Typography>
                        <Typography className={styles.jobDuration}>
                            {getStepDuration(activeStep)}
                        </Typography>
                        <ul className={styles.jobDescriptions}>
                            {getStepDescription(activeStep).map((d, i) => {
                                return (
                                    <li key={i}>{d}</li>
                                );
                            })}
                        </ul>
                    </Box>
                    <Box className={styles.buttonBox}>
                        <div style={{ position: 'relative' }}>
                            <Button
                                color="inherit"
                                disabled={activeStep === 0}
                                onClick={handleBack}
                                sx={{left: '20%', position: 'absolute' }}
                            >
                                Prev
                            </Button>
                            <Button
                                color="secondary"
                                variant='contained'
                                onClick={activeStep === (steps.length - 1) ? handleReset : handleNext}
                                sx={{ right:'10%', position: 'absolute' }}
                            >
                                {(activeStep === steps.length - 1) ? 'Reset' : 'Next'}
                            </Button>
                        </div>
                    </Box>
                    <Box className={styles.mobileBox}>
                        <Stepper nonLinear activeStep={activeStep}>
                            {steps.map((label, index) => (
                                <Step label={label} key={index}>
                                    <StepButton color="inherit" onClick={handleStep(index)} />
                                </Step>
                            ))}
                        </Stepper>
                        <br />
                        <Typography className={styles.jobEmployer}>
                            {getStepEmployer(activeStep)}
                        </Typography>
                        <Typography className={styles.jobTitle}>
                            {getStepTitle(activeStep)}
                        </Typography>
                        <Typography className={styles.jobDuration}>
                            {getStepDuration(activeStep)}
                        </Typography>
                        <ul className={styles.jobDescriptions}>
                            {getStepDescription(activeStep).map((d, i) => {
                                return (
                                    <li key={i}>{d}</li>
                                );
                            })}
                        </ul>
                    </Box>
                </Box>
            </AnimationOnScroll>
        </div>







    );
}
