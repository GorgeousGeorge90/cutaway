import styles from './Personal.module.scss';
import avatar from './../../assets/img/ava.jpg';

export const Personal = () => {

    return (<section className={styles.personal_container}>
        <div className={styles.personal_content}>
            <figure className={styles.personal_logo}>
                <img className={styles.personal_logo_img}
                     src={avatar}
                     alt='pic'
                />
                <figcaption className={styles.personal_logo_text}>
                    <h3>egor doroshin</h3>
                    <p>32 years, frontend developer</p>
                    <p>moscow</p>
                </figcaption>
            </figure>
             <section className={styles.personal_motivation}>
                 <h2 className={styles.personal_motivation_title}>my core motivation</h2>
                 <p className={styles.personal_motivation_text}>
                     <span>Привет!Меня зовут Егор и я инженер!</span>
                     Раньше я работал в AutoCad и занимался разработкой ракет, фасадного декора и мебели,
                     но уже полтора года как я являюсь Junior Frontend разработчиком
                     и развиваюсь в этом направлении!Мой базовый функционал:
                 </p>
                 <ul className={styles.personal_motivation_text_list}>
                     <li className={styles.personal_motivation_text_list_item}>HTML&CSS/SCSS</li>
                     <li className={styles.personal_motivation_text_list_item}>JavaScript</li>
                     <li className={styles.personal_motivation_text_list_item}>TypeScript</li>
                     <li className={styles.personal_motivation_text_list_item}>Redux/RTK</li>
                 </ul>
                 <p>Я за постоянный рост и против стагнации, хочу учить что-то новое и развиваться.</p>
             </section>
        </div>
    </section>)
}

