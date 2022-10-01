import styles from './styles.module.css'
import {useEffect, useRef} from "react";

export default function Nav({scrollToSection}) {

    const scrollTo = (e) => {
        const sectionName = e.target.textContent;
        const sectionId = sectionName.split(' ').join('_').toLowerCase();
        scrollToSection(sectionId)
    }
    return (
        <div className={styles.container}>
            <div className={styles.menuLeft}>
                <a className={styles.imgContainer} href="/">
                    <img src="logo.png" className={styles.img}/>
                </a>
                <ul className={styles.menuList}>
                    <li className={styles.listItem} onClick={scrollTo}>Industries</li>
                    <li className={styles.listItem} onClick={scrollTo}>Our process</li>
                    <li className={styles.listItem} onClick={scrollTo}>Case Studies</li>
                    <li className={styles.listItem} onClick={scrollTo}>Tango</li>
                </ul>
            </div>
            <div>
                <span className={`${styles.listItem} ${styles.grey}`}>contact@tango.agency</span>
                <button className={styles.pinkBtn}>get a quote</button>
            </div>
        </div>
    )
}