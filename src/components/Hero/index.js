import styles from './styles.module.css'

export default function Hero({heroRef, showScrollToTop}) {
    const scrollToBottom = () => {
        const footer = document.querySelector('header');
        footer.scrollIntoView(true);
    }
    return (
        <header className={styles.container} ref={heroRef}>
            {showScrollToTop &&
                <figure onClick={scrollToBottom}><img className={styles.scrollImg} src='up.png'/></figure>}
            <div className={`row pt-5 mt-5 align-items-start`}>
                <span className={`${styles.step} col-12 col-sm-1 mb-0`}>001</span>
                <h1 className={`${styles.heroText} col-11 col-sm-9 col-lg-6 `}>Boutique agency with a global impact</h1>
            </div>

            <div className={`row ps-none pt-4 align-items-flex-start`}>
                <p className={`col-11 col-sm-7 col-lg-4 ms-none offset-0 offset-sm-1`}>
                    We design, build and scale web and mobile apps with aspiring entrepreneurs, startups and enterprise
                    customers
                </p>
                <ul className={`col-12 col-sm-5 col-lg-3 offset-sm-1 offset-lg-0 mb-0`}>
                    <li className={'text-capitalize lh-lg'}>technology</li>
                    <li className={'text-capitalize lh-lg'}>marketing</li>
                    <li className={'text-capitalize lh-lg'}>product and design</li>

                </ul>
                <ul className={`col-12 col-sm-5 col-lg-3`}>
                    <li className={'text-capitalize lh-lg'}>strategic consulting</li>
                    <li className={'text-capitalize lh-lg'}>business synergies</li>
                    <li className={'text-capitalize lh-lg'}>fund raising</li>
                </ul>
            </div>
        </header>
    )
}