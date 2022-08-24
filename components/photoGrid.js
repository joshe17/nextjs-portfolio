import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Box from '@mui/material/Box';
import Image from 'next/image';
import styles from '../styles/photoGrid.module.css';

const etherwanPhotos = {
    'easyPoeBox1': {
        link: '/images/etherwanGraphics/easybox1.png',
        alt: 'Power box in rainstorm'
    },
    
    'easyPoeBox3': {
        link: '/images/etherwanGraphics/easybox3.png',
        alt: 'Galaga-style power box graphic'
    },
    'easyLink1': {
        link: '/images/etherwanGraphics/easylink1.png',
        alt: 'Cyborg man holding wireless bridge'
    },
    'easyLink2': {
        link: '/images/etherwanGraphics/easylink2.png',
        alt: 'Wireless bridge with earth background'
    },
    'easyLink3': {
        link: '/images/etherwanGraphics/easylink3.png',
        alt: 'Wireless bridge in desert and snow'
    },
    'easyLink4': {
        link: '/images/etherwanGraphics/easylink4.png',
        alt: 'Newspaper stand'
    },
    'iscPhoto': {
        link: '/images/etherwanGraphics/iscWest.png',
        alt: 'Traffic light with custom logo'
    },
    'itsPhoto': {
        link: '/images/etherwanGraphics/its.png',
        alt: 'Traffic signal'
    },
    'mediaConverter': {
        link: '/images/etherwanGraphics/mediaConverter.gif',
        alt: 'Media converter with lightning'
    },
    'easyPoeBox2': {
        link: '/images/etherwanGraphics/easybox2.png',
        alt: 'Power box with black background'
    },
};

export default function PhotoGrid() {
    return (
        <div>
            <Box className={styles.container}>
                <ImageList className={styles.imageGrid} variant='masonry' cols={3} gap={20}>
                    {Object.keys(etherwanPhotos).map((label) => (
                        <ImageListItem key={label}>
                            <img
                                src={etherwanPhotos[label].link}
                                loading='lazy'
                                alt={etherwanPhotos[label].alt}
                            />
                        </ImageListItem>
                    ))}
                </ImageList>
                <div className={styles.mobileImages}>
                    {Object.keys(etherwanPhotos).map((label, index) => (
                        <img
                            key={index}
                            src={etherwanPhotos[label].link}
                            loading='lazy'
                            alt={etherwanPhotos[label].alt}
                            className={styles.image}
                        />
                    ))}
                </div>
            </Box>
        </div>
    );
}