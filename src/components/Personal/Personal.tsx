import styles from './Personal.module.scss';
import avatar from './../../assets/img/ava.jpg';

export const Personal = () => {

    return (<section className={styles.personal_container}>
            <figure className={styles.personal_content}>
                <img className={styles.personal_pic}
                    src={avatar}
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

