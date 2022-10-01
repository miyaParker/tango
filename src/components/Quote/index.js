import styles from "./styles.module.css"
export default function Quote(){
    return (
        <section className={styles.container}>
            <span>Ready to work? </span>
            <button>Get a Quote</button>
        </section>
    )
}