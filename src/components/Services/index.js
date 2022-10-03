import styles from './styles.module.css'

export default function Services() {
    return (
        <section className={styles.section}>

            <div className={styles.container}>
                <div className={`${styles.container} row`}>
                    <span className={`col-12 col-sm-1 mb-0 pt-2`}>005</span>
                    <h2 className={`col-11 col-md-4 `}>We got you - on every step on the way</h2>
                    <div className={`col-12 col-md-6 col-lg-4 offset-0 offset-sm-1 offset-md-0`}>
                        <h4 className={`${styles.text} mb-3`}>Launching a business is so much more than writing a few lines of
                            code. While we enjoy the latter quite a lot, we also know that it is not enough. Through our
                            journey as entrepreneurs, we found that there is a number of ways we can help speed up your
                            business up.</h4>
                        <button className={`${styles.pinkBtn}  mb-5`}>learn more</button>
                    </div>
                </div>
                <div className={'row'}>
                    <div className={'col-11 col-sm-7 col-md-6 col-lg-4 d-md-block d-none'}>
                        <img src="pic2.png" />
                    </div>
                    <div className={'col-11 col-sm-7 col-md-6 col-lg-4 offset-sm-1 offset-md-0'}>
                        <h3>Strategic Consulting</h3>
                        <p>Having successfully globally scaled a number of ventures, we know what it takes to make it
                            work- from a good plan to strategic scaling. There are no magic tricks, just a lot of hard
                            work and well-earned knowledge!</p>
                    </div>
                    <div className={'col-11 col-sm-7 col-md-6 col-lg-4 offset-sm-1 offset-md-0'}>
                        <h3>Business Synergies</h3>
                        <p>Having successfully globally scaled a number of ventures, we know what it takes to make it
                            work- from a good plan to strategic scaling. There are no magic tricks, just a lot of hard
                            work and well-earned knowledge!</p>
                    </div>
                    <div className={'col-11 col-sm-7 col-md-6 col-lg-4 offset-sm-1 offset-md-0'}>
                        <h3>Fundraising</h3>
                        <p>Having successfully globally scaled a number of ventures, we know what it takes to make it
                            work- from a good plan to strategic scaling. There are no magic tricks, just a lot of hard
                            work and well-earned knowledge!</p>
                    </div>
                    <div className={'col-11 col-sm-8 col-md-6 col-lg-4 offset-sm-1 offset-md-0'}>
                        <h3>Technology</h3>
                        <p>Having successfully globally scaled a number of ventures, we know what it takes to make it
                            work- from a good plan to strategic scaling. There are no magic tricks, just a lot of hard
                            work and well-earned knowledge!</p>
                    </div>
                    <div className={'col-11 col-sm-8 col-md-6 col-lg-4'}>
                        <img src="pic2.png" className={'d-none d-md-block'}/>
                    </div>
                    <div className={'col-11 col-md-6 col-lg-4'}>
                        <img src="pic2.png" className={'d-none d-md-block'}/>
                    </div>
                    <div className={'col-11 col-sm-8 col-md-6 col-lg-4 offset-sm-1 offset-md-0'} >
                        <h3>Marketing</h3>
                        <p>Having successfully globally scaled a number of ventures, we know what it takes to make it
                            work- from a good plan to strategic scaling. There are no magic tricks, just a lot of hard
                            work and well-earned knowledge!</p>
                    </div>
                    <div className={'col-11 col-sm-8 col-md-6 col-lg-4 offset-sm-1 offset-md-0'}>
                        <h3>product & design</h3>
                        <p>Having successfully globally scaled a number of ventures, we know what it takes to make it
                            work- from a good plan to strategic scaling. There are no magic tricks, just a lot of hard
                            work and well-earned knowledge!</p>
                    </div>
                </div>
            </div>

        </section>
    )
}