import styles from './styles.module.css'
export default function Section2() {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                    <span className={styles.step}>002</span>
                    <h2 className={styles.h2}>Industries</h2>
                    <div className={styles.right}>
                        <h4 className={styles.intro}>Tango is a digital agency that brings that brings together technology services, design and marketing to make your business grow</h4>
                        <button className={styles.pinkBtn}>learn more</button>
                    </div>
                </div>
                <div className={styles.cards}>
                    <div className={`${styles.cardContainer} ${styles.small}`}>
                        <div>

                        </div>
                        <div className={styles.cardHeading}>
                            <span>001</span>
                            <span className={styles.text}>internet of things case studies</span>
                        </div>
                        <div className={`${styles.card} ${styles.first}`}>
                            <img src="/iot.jpg" className={styles.img} />
                        </div>
                        <div className={styles.desc}>
                            <h3 className={styles.underline}>Internet of Things</h3>
                            <p className={styles.p}>Tango knows how to make devices talk to each other.Considering both hardware and sofftware and their seamless cooperation</p>
                        </div>
                    </div>
                    <div className={`${styles.cardContainer} ${styles.big}`}>
                        <div className={`${styles.card}`}>
                            <img src="/fitness.png" className={styles.img} />
                        </div>
                        <div className={styles.desc}>
                            <h3 className={styles.underline}>Sport and fitness</h3>
                            <p className={styles.p}>We know the moves! We are all sport enthusiasts (some of just like to watch it though) and gladly work on apps helping people improve their physique</p>
                        </div>
                    </div>
                </div>
                <div className={styles.cards}>
                    <div className={`${styles.cardContainer} ${styles.big}`}>
                        <div className={styles.cardHeading}>
                            <span>001</span>
                            <span className={styles.text}>internet of things case studies</span>
                        </div>
                        <div className={`${styles.card} ${styles.first}`}>
                            <img src="/fitness.png" className={styles.img} />
                        </div>
                        <div className={styles.desc}>
                            <h3 className={styles.underline}>Robotics</h3>
                            <p className={styles.p}>We're not scared that robots will take over the planet. Why? Because we well know what they are made of. Responsive, precise, and fully functional robotic systems.</p>
                        </div>
                    </div>
                    <div className={`${styles.cardContainer} ${styles.small}`}>
                        <div className={styles.card}>
                            <img src="/iot.jpg" className={styles.img} />
                        </div>
                        <div className={styles.desc}>
                            <h3 className={styles.underline}>Fintech & Banking</h3>
                            <p className={styles.p}>Tango has a proven track record in cooperations with the world's biggest banks and fintech startups, assuring complex legal requirements.</p>
                        </div>
                    </div>
                </div>
                <div className={styles.cards}>
                    <div className={`${styles.cardContainer} ${styles.small}`}>
                        <div className={styles.cardHeading}>
                            <span>001</span>
                            <span className={styles.text}>internet of things case studies</span>
                        </div>
                        <div className={`${styles.card} ${styles.first}`}>
                            <img src="/iot.jpg" className={styles.img} />
                        </div>
                        <div className={styles.desc}>
                            <h3 className={styles.underline}>Travel & Mobility</h3>
                            <p className={styles.p}>Tango is driven by the success of its partners. We are an active player of reshaping leisure and business travel world, by empowering mobility and saving costs.</p>
                        </div>
                    </div>
                    <div className={`${styles.cardContainer} ${styles.big}`}>
                        <div className={`${styles.card} `}>
                            <img src="/fitness.png" className={styles.img} />
                        </div>
                        <div className={styles.desc}>
                            <h3 className={styles.underline}>Telecommunications</h3>
                            <p className={styles.p}>"Hello? Can you hear me well?". Well yes, if you know what it takes to seamlessly connect two sides with each other</p>
                        </div>
                    </div>
                </div>
                <div className={styles.cards}>
                    <div className={`${styles.cardContainer} ${styles.small}`}>
                        <div className={styles.cardHeading}>
                            <span>001</span>
                            <span className={styles.text}>internet of things case studies</span>
                        </div>
                        <div className={`${styles.card} ${styles.first}`}>
                            <img src="/iot.jpg" className={styles.img} />
                        </div>
                        <div className={styles.desc}>
                            <h3 className={styles.underline}>B2B / Marketplace</h3>
                            <p className={styles.p}>Tango knows how to connect supply and demand. Every business going online needs a stable, easy to use and safe place to market.</p>
                        </div>
                    </div>
                    <div className={`${styles.cardContainer} ${styles.big}`}>
                        <div className={`${styles.card} `}>
                            <img src="/fitness.png" className={styles.img} />
                        </div>
                        <div className={styles.desc}>
                            <h3 className={styles.underline}>Gaming</h3>
                            <p className={styles.p}>Tango plays it well. Two things: Fun and Joy. Is it a casino slot software or a mobile app game, we know what it takes to keep users engaged.</p>
                        </div>
                    </div>
                </div>
        </section>
    )
}