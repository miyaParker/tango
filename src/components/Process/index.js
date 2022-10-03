import styles from './styles.module.css'

export default function Process({processRef}) {
    return (
        <section className={styles.section} id={'our_process'} ref={processRef}>
            <div className={`${styles.container} row`}>
                <span className={`col-12 col-sm-1 mb-0 pt-2`}>003</span>
                <h2 className={`${styles.h2} col-11 col-md-4 `}>Our Process</h2>
                <div className={`col-11 col-sm-9 col-md-6 col-lg-4 offset-0 offset-sm-1 offset-md-0`}>
                    <h4 className={styles.text}>Share your idea and we'll let you know what it takes to monetize it. Get in touch and we'll
                        quote it within 2 days.</h4>
                    <button className={styles.pinkBtn}>learn more</button>
                </div>
                <div className={'row mt-5'}>
                    <div className={`${styles.testImg} d-none d-md-flex align-items-center justify-content-between w-75`}>
                        <img src="document.png" className={styles.img}/>
                        <img src="line.png" className={`ps-1`}/>
                        <img src="mobile.png" className={styles.img}/>
                        <img src="line.png" className={`ps-1`}/>
                        <img src="calendar.png" className={styles.img}/>
                    </div>
                    <div className={`${styles.card} col-11 col-sm-9 col-md-4 flex-sm-row align-items-start offset-sm-1 offset-md-0`}>
                        <div className={`${styles.img} d-md-none`}>
                            <img src="document.png"/>
                        </div>
                        <div>
                            <h3 className={'mt-0'}>Quote in 48h</h3>
                            <p>Once we'll have your project's details, we'll tailor a customized offer with a price and
                                a roadmap</p>
                        </div>

                    </div>
                    <div className={`${styles.card} col-11 col-sm-9 col-md-4 flex-sm-row align-items-start offset-sm-1 offset-md-0`}>
                        <div className={`${styles.img} d-md-none`}>
                            <img src="mobile.png"/>
                        </div>
                        <div>
                            <h3 className={'mt-0'}>Prototype in 2 weeks</h3>
                            <p>After 2 weeks you'll receive an initial, tangible product, easy to develop and play
                                with.</p>
                        </div>
                    </div>
                    <div className={`${styles.card} col-11 col-sm-9 col-md-4 flex-sm-row align-items-start offset-sm-1 offset-md-0`}>
                        <div className={`${styles.img} d-md-none`}>
                            <img src="calendar.png"/>
                        </div>
                        <div>
                            <h3 className={'mt-0'}>MVP in 2 months</h3>
                            <p>MVP is a milestone in your project's life. We'll deliver it in 2 months, to make sure you
                                have your top features in your project.</p>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}