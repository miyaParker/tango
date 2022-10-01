import styles from './styles.module.css'

const Indicator = ({activeSection}) => {

    return (
        <div className={`${styles.indicatorParent} d-none d-md-block`}>
            <div className={`${activeSection === 'hero' && styles.active} ${styles.indicator}`}
                 id={'hero_indicator'}></div>
            <div className={`${activeSection === 'industries' ? styles.active : ''} ${styles.indicator}`}></div>
            <div className={`${activeSection === 'our_process' ? styles.active : ''} ${styles.indicator}`}></div>
            <div className={`${activeSection === 'case_studies' ? styles.active : ''} ${styles.indicator}`}></div>
            <div className={`${activeSection === 'tango' ? styles.active : ''} ${styles.indicator}`}></div>
        </div>
    )
}


export default Indicator