import * as React from 'react';
import IntroPage from '../components/intro.js';
import AboutPage from '../components/about.js'
import ExperiencePage from '../components/experience.js';
import ProjectPage from '../components/projects.js'
import Container from '@mui/material/Container';
import SidebarNav from '../components/ResponsiveAppBar.js';
import Layout from '../components/layout.js';
import Copyright from '../src/Copyright.js';
import styles from '../styles/index.module.css';

export default function Index() {
    return (
        <div>
            <div className = { styles.bg } >
                <Layout>
                    <Container>
                        <IntroPage />
                        <br />
                        <AboutPage />
                        <br />
                        <ExperiencePage />
                        <br />
                        <ProjectPage />
                    </Container>
                </Layout>
            </div>
            < br />
            <Copyright className={styles.copyright}/>
            <br />
            <SidebarNav />
        </div>
  );
}
