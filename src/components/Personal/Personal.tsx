import styles from './Personal.module.scss';

export const Personal = () => {

    return (<section className={styles.personal_container}>
            <figure className={styles.personal_content}>
                <img className={styles.personal_pic}
                    src={'https://avatars.githubusercontent.com/u/81562716?v=4'}
                    alt='pic'
                />
                <figcaption className={styles.personal_info}>
                    <h3>egor doroshin</h3>
                    <p>32 years, frontend developer</p>
                    <p>moscow</p>
                </figcaption>
            </figure>
    </section>)
}

