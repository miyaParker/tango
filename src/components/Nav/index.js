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
                <span className={`${styles.listItem} ${styles.grey}`}><a
                    href={'mailto:karenziboh@gmail.com?subject=I would love to hire you!&&body=Hi Karen! I love your portfolio and I would love to hire you.'}>contact@tango.agency</a></span>
                <button className={styles.pinkBtn}><a
                    href={'mailto:karenziboh@gmail.com?subject=Quote Request&&body=I would like to request a quote for ...'}>get a quote</a></button>
            </div>
        </div>
    )
}