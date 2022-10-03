import styles from './styles.module.css'
export default function Team({tangoRef}) {
    return (
        <section className={styles.section} ref={tangoRef} id={'tango'}>

            <div className={styles.container}>
                <span className={`col-12 col-sm-1 mb-0 pt-2`}>006</span>
                    <div className={`col-11 col-md-4 `}>
                        <img className={styles.img} src="pic4.png" />
                    </div>
                <div className={`col-11 col-sm-9 col-md-6 col-lg-4 offset-0 offset-sm-1`}>
                    <h3 className={styles.h3}>A team you can trust </h3>
                    <h4 className={styles.text}>We design, build and scale web and mobile apps with aspiring entrepreneurs, startup and enterprise customers.</h4>
                    <p>Building our own products raised the stakes for the team at Tango-we all understand that to build a successful business,IT, business and marketing work tightly together. </p>
                    <p>Tango has been built on the principles of a supportive and, open community- a place where we, it founders, would proudly apply to work ourselves. We're not a 9-5 , clock punching bunch. We- you and us-are here to build a product you will be proud of, one that scales and shines.</p>
                    <button className={styles.button}>more about tango</button>

                </div>
            </div>

        </section>
    )
}