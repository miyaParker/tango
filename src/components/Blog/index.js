import styles from './styles.module.css'

export default function Blog() {
    return (
        <section className={styles.section}>
            <div className={`${styles.container} row`}>
                <span className={`col-12 col-sm-1 mb-0 pt-2`}>007</span>
                <h2 className={`${styles.h2} col-11 col-md-4 `}>Our Blog</h2>
                <div className={`${styles.right} col-12 col-md-6 ps-md-3 offset-0 offset-sm-1 offset-md-1`}>
                    <h4 className={`${styles.intro} pt-4 pb-3 pe-5 pe-md-5 pt-md-0 `}> Stay up to date with the latest tech trends and news in Tango</h4>
                    <button className={styles.button}>View all posts</button>
                </div>
            </div>
            <div className={'row offset-0 offset-sm-1 offset-md-0 mt-5'}>
                <div className={'ps-0 col-12 col-md-6 col-lg-4'}>
                    <div className={`${styles.darkgreyBorder} ${styles.card} ${styles.card1}`}>
                    </div>
                    <div className={styles.text}>
                        <a href="#"><h3 className={styles.h3}>Avatar view for android apps</h3></a>
                        <p className={styles.p}>The avatar view is gaining much popularity now in android
                            development</p>
                    </div>
                </div>
                <div className={'ps-0 col-12 col-md-6 col-lg-4'}>
                    <div className={`${styles.lightgreyBorder} ${styles.card} ${styles.card3}`}></div>
                    <div className={styles.text}>
                        <a href="#"><h3 className={styles.h3}>Avatar view for android apps</h3></a>
                        <p className={styles.p}>The avatar view is gaining much popularity now in android
                            development</p>
                    </div>
                </div>
                <div className={'ps-0 col-12 col-md-6 col-lg-4'}>
                    <div className={`${styles.whiteBorder} ${styles.card} ${styles.card2}`}></div>
                    <div className={styles.text}>
                        <a href="#"><h3 className={styles.h3}>Avatar view for android apps</h3></a>
                        <p className={styles.p}>The avatar view is gaining much popularity now in android
                            development</p>
                    </div>
                </div>
                <div className={'ps-0 col-12 col-md-6 col-lg-4'}>
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