import styles from './Bio.module.scss';
import {useEffect, useState} from 'react';


export const Bio = () => {

    return (<section className={styles.bio_container}>
        <article className={styles.bio_content}>
            <>
                <h2 className={styles.bio_title}>my motivation</h2>
                <p>
                    Привет!Я начинающий Software Engineer, нахожусь
                    на старте своей карьеры, хотел бы попасть в коллектив
                    увлеченных людей и активно развиваться, как профессионал!
                </p>
            </>
            <table className={styles.bio_table}>
                <thead className={styles.bio_table_head}>
                <tr>
                    <th>Мой Стек</th>
                </tr>
                </thead>
                <tbody className={styles.bio_table_body}>
                <tr>
                    <td>HTML</td>
                    <td>JavaScript</td>
                    <td>Redux/RTK</td>
                </tr>
                <tr>
                    <td>CSS/SCSS</td>
                    <td>TypeScript</td>
                    <td>MobX</td>
                </tr>
                </tbody>
            </table>
            <p>Примеры проектов:</p>
        </article>
    </section>)
}