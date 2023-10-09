import { ProjectType } from '../../store/store';
import { FC } from "react";
import styles from './ProjectCard.module.scss';



export const ProjectCard:FC<ProjectType> =(card) => {

    return (<li className={styles.card_container}>
        <div className={styles.card_content}>

        </div>
    </li>)
}