import * as React from 'react';
import Link from 'next/link';
import styles from '../styles/ResponsiveAppBar.module.css';

const navLinks = [
    <Link href="#" passHref={true}>
        <a className={styles.navText}>/intro</a>
    </Link >,
    <Link href="#aboutSection" passHref={true}>
        <a className={styles.navText}>/aboutMe</a>
    </Link>,
    <Link href="#experienceSection" passHref={true}>
        <a className={styles.navText}>/experience</a>
    </Link>,
    <Link href="#projectsSection" passHref={true}>
        <a className={styles.navText}>/projects</a>
    </Link>
];

export default function SidebarNav() {

    return (
        <div style={{ width: 240 }} className={styles.navContainer}>
            <ul className={styles.navList}>
                {navLinks.map((label, index) => (
                    <li key={index}>{label}</li>
                ))}
            </ul>
        </div>
    );
}
