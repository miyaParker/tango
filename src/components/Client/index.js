import styles from './styles.module.css'

export default function Client({clientRef}) {
    return (<section className={styles.section} ref={clientRef} id={'case_studies'}>

        <div className={styles.container}>
            <div className={`${styles.container} row`}>
                <span className={`col-12 col-sm-1 mb-0 pt-2 ps-0`}>004</span>
                <h2 className={`col-11 col-md-4 ps-0`}>Our Clients</h2>
                <div className={`ps-0 col-12 col-md-6 ps-md-3 offset-0 offset-sm-1 offset-md-0`}>
                    <h4 className={`${styles.intro} pt-4 pb-3 pe-5 pe-md-5 pt-md-0 `}>Tango works for customers from
                        all over the globe. Be the next one!</h4>
                </div>
            </div>
            <div className={'row'}>
                <div className={'col-12 offset-0 offset-sm-1 offset-md-0 col-md-6 col-lg-4'}>
                    <div className={`${styles.imgCard} ${styles.card1}`}>
                    </div>
                    <h3>Dscout</h3>
                    <p className={styles.pinktext}>Michael Winnick, Founder</p>
                    <p>Having successfully globally scaled a number of ventures, we know what it takes to make it
                        work- from a good plan to startegic scaling. There are no magic tricks, just a lot of hard
                        work and well-earned knowledge!</p>
                </div>
                <div className={'col-12 offset-0 offset-sm-1 offset-md-0 col-md-6 col-lg-4'}>
                    <div className={`${styles.imgCard} ${styles.card2}`}>
                    </div>
                    <h3>Talixo</h3>
                    <p className={styles.pinktext}>Michael Winnick, Founder</p>
                    <p>Having successfully lobally scaled a number of ventures, we know what it takes to make it
                        work- from a good plan to startegic scaling. There are no magic tricks, just a lot of hard
                        work and well-earned knowledge!</p>
                </div>
                <div className={'col-12 offset-0 offset-sm-1 offset-md-0 col-md-6 col-lg-4'}>
                    <div className={`${styles.imgCard} ${styles.card3}`}>
                    </div>
                    <h3>Kalamba</h3>
                    <p className={styles.pinktext}>Michael Winnick, Founder</p>
                    <p>Having successfully lobally scaled a number of ventures, we know what it takes to make it
                        work- from a good plan to startegic scaling. There are no magic tricks, just a lot of hard
                        work and well-earned knowledge!</p>
                </div>
                <div className={'col-12 offset-0 offset-sm-1 offset-md-0 col-md-6 col-lg-4'}>
                    <div className={`${styles.imgCard} ${styles.card4}`}>
                    </div>
                    <h3>Bitbay</h3>
                    <p className={styles.pinktext}>Michael Winnick, Founder</p>
                    <p>Having successfully lobally scaled a number of ventures, we know what it takes to make it
                        work- from a good plan to startegic scaling. There are no magic tricks, just a lot of hard
                        work and well-earned knowledge!</p>
                </div>
                <div className={'col-12 offset-0 offset-sm-1 offset-md-0 col-md-6 col-lg-4'}>
                    <div className={`${styles.imgCard} ${styles.card5}`}>
                    </div>
                    <h3>Roam Robotics</h3>
                    <p className={styles.pinktext}>Michael Winnick, Founder</p>
                    <p>Having successfully lobally scaled a number of ventures, we know what it takes to make it
                        work- from a good plan to startegic scaling. There are no magic tricks, just a lot of hard
                        work and well-earned knowledge!</p>
                </div>
                <div className={'col-12 offset-0 offset-sm-1 offset-md-0 col-md-6 col-lg-4'}>
                    <div className={`${styles.imgCard} ${styles.card6}`}>
                    </div>
                    <h3>Bitbay</h3>
                    <p className={styles.pinktext}>Michael Winnick, Founder</p>
                    <p>Having successfully lobally scaled a number of ventures, we know what it takes to make it
                        work- from a good plan to startegic scaling. There are no magic tricks, just a lot of hard
                        work and well-earned knowledge!</p>
                </div>
            </div>
        </div>

    </section>)
}