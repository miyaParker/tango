import styles from './styles.module.css'
import {useEffect, useRef} from "react";

export default function Nav({scrollToSection}) {
    const menuRef = useRef()
    const scrollTo = (e) => {
        const sectionName = e.target.textContent;
        const sectionId = sectionName.split(' ').join('_').toLowerCase();
        scrollToSection(sectionId)
    }
    const toggleMenu = () => {
        menuRef.current.classList.toggle('d-none')
    }
    return (
        <div className={styles.container}>
            <div className={styles.menuLeft}>
                <a className={styles.logoContainer} href="/">
                    <img src="logo.png" className={styles.img}/>
                </a>
                <ul className={`${styles.menuList} d-none d-lg-block`}>
                    <li className={styles.listItem} onClick={scrollTo}>Industries</li>
                    <li className={styles.listItem} onClick={scrollTo}>Our process</li>
                    <li className={styles.listItem} onClick={scrollTo}>Case Studies</li>
                    <li className={styles.listItem} onClick={scrollTo}>Tango</li>
                </ul>
            </div>
            <div className={`d-flex align-items-center`}>
                <span className={`${styles.listItem} ${styles.grey}  d-none d-lg-inline`}><a
                    className={`${styles.grey} text-decoration-none`}
                    href={'mailto:karenziboh@gmail.com?subject=I would love to hire you!&&body=Hi Karen! I love your portfolio and I would love to hire you.'}>contact@tango.agency</a></span>
                <button className={styles.pinkBtn}><a className={`text-white text-decoration-none`}
                    href={'mailto:karenziboh@gmail.com?subject=Quote Request&&body=I would like to request a quote for ...'}>get
                    a quote</a></button>
                <figure onClick={toggleMenu} className={` ${styles.toggleBtn} d-block d-lg-none`}><img src={'mobile-menu.png'}/></figure>
            </div>
            <ul className={`${styles.menuList} ${styles.mobileMenu} d-flex d-none d-lg-none`} ref={menuRef}>
                <li className={styles.listItem} onClick={scrollTo}>Industries</li>
                <li className={styles.listItem} onClick={scrollTo}>Our process</li>
                <li className={styles.listItem} onClick={scrollTo}>Case Studies</li>
                <li className={styles.listItem} onClick={scrollTo}>Tango</li>
                <li className={`${styles.listItem}`}><a className={`text-decoration-none`}
                                                        href={'mailto:karenziboh@gmail.com?subject=I would love to hire you!&&body=Hi Karen! I love your portfolio and I would love to hire you.'}>contact@tango.agency</a>
                </li>
            </ul>
        </div>
    )
}