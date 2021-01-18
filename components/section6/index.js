import styles from './styles.module.css'
export default function Section6() {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <span className={styles.step}>006</span>
                <div className={styles.card} >
                    <div className={styles.img}>
                        <img src="/pic4.png" />
                    </div>
                </div>

                <div className={styles.text}>
                    <h3 className={styles.h3}>A team you can trust </h3>
                    <h4>We design, build and scale web and mobile apps with aspiring entrepreneurs, startup and enterprise customers.</h4>
                    <p>Building our own products raised the stakes for the team at Tango-we all understand that to build a successful business,IT, business and marketing work tightly together. </p>
                    <p>Tango has been built on the principles of a supportive and, open community- a place where we, it founders, would proudly apply to work ourselves. We're not a 9-5 , clock punching bunch. We- you and us-are here to build a product you will be proud of, one that scales and shines.</p>
                    <button className={styles.button}>more about tango</button>

                </div>
            </div>

        </section>
    )
}