import styles from './styles.module.css'
export default function Nav() {
    return (
        <div className={styles.container}>
            <span className={styles.imgContainer}>
                <img src="/logo.png" className={styles.img} />
            </span>
            <ul className={styles.list}>
                <li className={styles.listItem}>Industries</li>
                <li className={styles.listItem}>Case Studies</li>
                <li className={styles.listItem}>Our process</li>
                <li className={styles.listItem}>Tango</li>
            </ul>
            <ul className={styles}>
                <li className={`${styles.listItem} ${styles.grey}`}>contact@tango.agency</li>
                <li className={styles.listItem}><button className={styles.pinkBtn}>get a quote</button></li>
            </ul>
        </div>
    )
}