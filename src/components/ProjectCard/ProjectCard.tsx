import { ProjectType } from '../../types';
import { FC } from 'react';
import styles from './ProjectCard.module.scss';
import { motion } from 'framer-motion';

const cardAnimation = {
    start: {
        opacity: 0,
    },
    finish: {
        opacity: 1,
        transition: {
            ease: "easeOut",
            duration: 1,
        },
    }
}

export const ProjectCard:FC<ProjectType> =(card) => {

    return (<section
        className={styles.card_container}>
        <div className={styles.card_content}>
            <figure className={styles.card_logo}>
                <img className={styles.card_logo_img}
                     src={card.pic ? card.pic:''}
                     alt='project pic'
                />
            </figure>
            <section className={styles.card_info}>
                <h3 className={styles.card_info_title}>{card.name}</h3>
                <p className={styles.card_info_description}>{card.description}</p>
                <ul className={styles.card_info_stack}>
                    {
                        card.stack.map((item, i) =>
                            <li className={styles.card_stack_item}
                                key={i}>
                            {item}
                        </li>)
                    }
                </ul>
                <label className={styles.card_info_label}>
                    <a href={card.link}
                       target={'_blank'}
                       className={styles.card_info_label_link}
                    >{card.link}</a>
                </label>
            </section>
        </div>
    </section>)
}