import * as React from 'react';
import Box from '@mui/material/Box';
import Image from 'next/image';
import styles from '../styles/about.module.css';
import "animate.css/animate.min.css";
import { AnimationOnScroll } from 'react-animation-on-scroll';


export default function AboutPage() {
  return (
      <div id='aboutSection' className='sectionContainer'>
          <h2 className={styles.title}>/aboutMe</h2>
          <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce='true'>
              <Box className={styles.aboutText}>
                  <p>
                      I graduated from the University of California, Irvine with a Bachelor's in Business Administration and a minor in Computer Science. I have also completed the Google UX Design Certificate Course!

                      Below are some technologies and languages that I am familiar with!
                  </p>
                  <ul className={styles.skillsList}>
                      <li className={styles.bulletPoint}><span className={styles.bulletContent}>Swift</span></li>
                      <li className={styles.bulletPoint}><span className={styles.bulletContent}>SwiftUI</span></li>
                      <li className={styles.bulletPoint}><span className={styles.bulletContent}>Combine</span></li>
                      <li className={styles.bulletPoint}><span className={styles.bulletContent}>Python</span></li>
                      <li className={styles.bulletPoint}><span className={styles.bulletContent}>C++</span></li>
                  </ul>
                  <ul className={styles.skillsList}>
                      <li className={styles.bulletPoint}><span className={styles.bulletContent}>React</span></li>
                      <li className={styles.bulletPoint}><span className={styles.bulletContent}>NextJS</span></li>
                      <li className={styles.bulletPoint}><span className={styles.bulletContent}>JavaScript</span></li>
                      <li className={styles.bulletPoint}><span className={styles.bulletContent}>CSS / HTML</span></li>
                      <li className={styles.bulletPoint}><span className={styles.bulletContent}>SQL</span></li>
                  </ul>
                  <ul className={styles.skillsList}>
                      <li className={styles.bulletPoint}><span className={styles.bulletContent}>Figma</span></li>
                      <li className={styles.bulletPoint}><span className={styles.bulletContent}>AdobeXD</span></li>
                      <li className={styles.bulletPoint}><span className={styles.bulletContent}>Photoshop</span></li>
                      <li className={styles.bulletPoint}><span className={styles.bulletContent}>Premiere Pro</span></li>
                      <li className={styles.bulletPoint}><span className={styles.bulletContent}>Indesign</span></li>
                  </ul>
                  <p>
                      Outside of work, I enjoy art, rock-climbing, reading, cars, and finding new coffee shops. I'm also really interested in HiFi audio equipment, anime, and fashion.
                  </p>
              </Box>
              <div className={styles.imageSizer}>
                  <Image src='/images/profile1.jpg' className={styles.profileImage} height={540} width={360} />
              </div>
          </AnimationOnScroll>
      </div>
  );
}
