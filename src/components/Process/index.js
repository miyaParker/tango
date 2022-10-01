import styles from './styles.module.css'
export default function Process({processRef}) {
    return (
        <section className={styles.section} id={'our_process'} ref={processRef}>
            <div className={styles.container}>
                <span className={styles.step}>003</span>
                <span className={styles.left}><h2>Our Process</h2></span>
                <div className={styles.text}>
                    <h4>Share your idea and we'll let you know what it takes to monetize it. Get in touch and we'll quote it within 2 days.</h4>
                    <button className={styles.pinkBtn}>learn more</button>
                </div>
                <div className={styles.flex}>
                    <div className={styles.card}>
                        <span className={styles.imgFlex}>
                            <img src="document.png" className={styles.img} />
                            <img src="line.png" className={styles.img2} />
                        </span>
                        <h3>Quote in 48h</h3>
                        <p>Once we'll have your project's details, we'll tailor a customized offer with a price and a roadmap</p>
                    </div>
                    <div className={styles.card}>
                        <span >
                            <img src="mobile.png" className={styles.img} />
                            <img src="line.png" className={styles.img2} />
                        </span>
                        <h3>Prototype in 2 weeks</h3>
                        <p>After 2 weeks you'll receive an initial, tangible product, easy to develop and play with</p>
                    </div>
                    <div className={styles.card}>
                        <img src="calendar.png" className={styles.img} />
                        <h3>MVP in 2 months</h3>
                        <p>MVP is a milestone in your project's life. We'll deliver it in 2 months, to make sure you have your top features in your project.</p>
                    </div>
                </div>
            </div>

        </section>
    )
}