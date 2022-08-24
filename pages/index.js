import * as React from 'react';
import IntroPage from '../components/intro';
import AboutPage from '../components/about'
import ExperiencePage from '../components/experience';
import ProjectPage from '../components/projects'
import Container from '@mui/material/Container';
import SidebarNav from '../components/ResponsiveAppBar';
import Layout from '../components/layout';
import Copyright from '../src/Copyright';
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
