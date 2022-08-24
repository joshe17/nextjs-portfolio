import * as React from 'react';
import PhotoGrid from '../components/photoGrid';
import Container from '@mui/material/Container';
import FilePresentIcon from '@mui/icons-material/FilePresent';
import Link from 'next/link';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import styles from '../styles/etherwan.module.css'
import Copyright from '../src/Copyright';
import Layout from '../components/Layout';

export default function Etherwan() {
    return (
        <div className={styles.bg} >
            <Layout>
                <Container className={styles.container}>
                    <div>
                        <Link href='/'>
                            <ArrowBackIosNewIcon className={styles.backButton} color='secondary' fontSize='large' />
                        </Link>
                        <h2 className={styles.title}> /etherwanGraphics</h2>
                    </div> 
                    <br />
                    <div style={{ position:'relative' }}>
                        <span>
                            <PhotoGrid />
                        </span>
                        <span className={styles.buttonContainer}>
                            <h3> EasyLink MP Brochures </h3>
                            <Link href='/pdfs/easylinkBrochure1.pdf' target='_blank'>
                                <FilePresentIcon fontSize='large' color="secondary" class={styles.fileButtons}/>
                            </Link>
                            <Link href='/pdfs/easylinkBrochure2.pdf' target='_blank'>
                                <FilePresentIcon fontSize='large' color="secondary" class={styles.fileButtons}/>
                            </Link>
                        </span>
                    </div>
                    <br />
                </Container>
            </Layout>
            <Copyright />
            <br />
         </div>
    );
}

