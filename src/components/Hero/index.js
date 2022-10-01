import styles from './styles.module.css'
import Indicator from "../layout/Indicator";

export default function Hero({heroRef, showScrollToTop}) {
    const scrollToBottom = () => {
        const footer = document.querySelector('header');
        footer.scrollIntoView(true);
    }
    return (
        <header className={styles.container} ref={heroRef}>
            {showScrollToTop &&
                <figure onClick={scrollToBottom}><img className={styles.scrollImg} src='up.png'/></figure>}
            <div className={styles.flex}>
                <span className={styles.step}>001</span>
                <h1>Boutique agency with a global impact</h1>
            </div>
            <div className={styles.heroCard}>
                <p className={styles.heroSpace}></p>
                <p className={styles.heroText}>
                    We design, build and scale web and mobile apps with aspiring entrepreneurs, startups and enterprise
                    customers
                </p>
                <ul className={styles.list}>
                    <li className={styles.listItem}>technology</li>
                    <li className={styles.listItem}>marketing</li>
                    <li className={styles.listItem}>product and design</li>

                </ul>
                <ul className={styles.list}>
                    <li className={styles.listItem}>strategic consulting</li>
                    <li className={styles.listItem}>business synergies</li>
                    <li className={styles.listItem}>fund raising</li>
                </ul>
            </div>
        </header>
    )
}