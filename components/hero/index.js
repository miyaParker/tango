import styles from './styles.module.css'
import Nav from '../../components/nav'
export default function Hero() {
    return (
        <div className={styles.container}>
            <Nav></Nav>
                <div className={styles.flex}>
                    <span className={styles.step}>001</span>
                    <h1>Boutique agency with a global impact</h1>
                </div>
                <div className={styles.heroCard}>
                    <span className={styles.imgContainer}>
                        <img src="/steps.png" className={styles.img} />
                    </span>
                    <p className={styles.heroText}>
                        We design, build and scale web and mobile apps with aspiring entrepreneurs, startups and enterprise customers
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
                    <img className={`${styles.img} ${styles.scrollImg}`} src='/down.png' />
                </div>
            </div>
    )
}