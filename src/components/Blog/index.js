import styles from './styles.module.css'

export default function Blog() {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <span className={styles.step}>007</span>
                <h2>Our Blog</h2>
                <div>
                    <h4 className={styles.h3}> Stay up to date with the latest tech trends and news in Tango</h4>
                    <button className={styles.button}>View all posts</button>
                </div>
            </div>
            <div className={styles.cards}>
                <div>
                    <div className={`${styles.darkgreyBorder} ${styles.card} ${styles.card1}`}>
                    </div>
                    <div className={styles.text}>
                        <a href="#"><h3 className={styles.h3}>Avatar view for android apps</h3></a>
                        <p className={styles.p}>The avatar view is gaining much popularity now in android
                            development</p>
                    </div>
                </div>
                <div>
                    <div className={`${styles.whiteBorder} ${styles.card} ${styles.card2}`}></div>
                    <div className={styles.text}>
                        <a href="#"><h3 className={styles.h3}>Avatar view for android apps</h3></a>
                        <p className={styles.p}>The avatar view is gaining much popularity now in android
                            development</p>
                    </div>
                </div>
                <div>
                    <div className={`${styles.lightgreyBorder} ${styles.card}  ${styles.card3}`}></div>
                    <div className={styles.text}>
                        <a href="#"><h3 className={styles.h3}>Avatar view for android apps</h3></a>
                        <p className={styles.p}>The avatar view is gaining much popularity now in android
                            development</p>
                    </div>
                </div>
            </div>
        </section>
    )
}