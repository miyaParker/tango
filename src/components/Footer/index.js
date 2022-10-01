import styles from "./styles.module.css"
export default function Footer() {
    return (
        <footer className={styles.container}>
            <div className={styles.flexLeft}>
            <img  src="logo.png" />
            </div>
            
            <div className={styles.flexRight}>
                <div className={styles.contact}>
                    <h4>Tango Agency</h4>
                    <span className={styles.address}>52, Algeria Rd, Adebisi Konga, Accra. P.O Box 10303</span>
                    <span className={styles.email}>contact@tango.agency</span>
                </div>
                <ul className={styles.menu}>
                    <li>Home</li>
                    <li>Industries</li>
                    <li>Case Studies</li>
                    <li>Our process</li>
                    <li>Blog</li>
                    <li>get a quote</li>
                </ul>
                <ul className={styles.social}>
                    <li>facebook</li>
                    <li>linkedin</li>
                    <li>twitter</li>
                    <li>Pinterest</li>
                    <li>github</li>
                    <li>medium</li>
                </ul>
            </div>

        </footer>
    )
}