import { ProjectType } from '../../types';
import { FC } from 'react';
import styles from './ProjectCard.module.scss';



export const ProjectCard:FC<ProjectType> =(card) => {

    return (<li className={styles.card_container}>
        <div className={styles.card_content}>
            <figure className={styles.card_logo}>
                <img className={styles.card_logo_img}
                     src={card.pic ? card.pic:''}
                     alt='project pic'
                />
                <figcaption className={styles.card_logo_title}>{card.name}</figcaption>
            </figure>
            <p className={styles.card_description}>{card.description}</p>
            <ul className={styles.card_stack}>
                {
                    card.stack.map((item,i) => <li key={i}>
                        {item}
                    </li>)
                }
            </ul>
            <label className={styles.card_label}>
                Link:
                <a href={card.link}
                   target={'_blank'}
                   className={styles.card_label_link}
                >{card.link}</a>
            </label>
        </div>
    </li>)
}