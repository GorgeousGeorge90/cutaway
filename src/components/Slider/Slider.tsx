import { ProjectCard } from '../ProjectCard';
import { FC,useState } from 'react';
import styles from './Slider.module.scss';
import { ProjectType } from '../../types';
import { ReactComponent as Right } from '../../assets/img/arr_right.svg';
import { ReactComponent as Left } from '../../assets/img/arr_right.svg';


type SliderType = {
    projects:ProjectType[],
}


export const Slider:FC<SliderType> = ({projects}) => {
    const [current, setCurrent] = useState<number>(0)

    const nextProject = () => {
        if ( current < projects.length - 1 ) {
            setCurrent(prev => prev + 1)
        } else if ( current  === projects.length - 1) {
            setCurrent(0)
        }
    }

    const prevProject = () => {
        if ( current > 0 ) {
            setCurrent(prev => prev - 1)
        } else if ( current  === 0) {
            setCurrent(projects.length - 1)
        }
    }

    return <section
        className={styles.slider_container}>
        <div className={styles.slider_content}>
            <Left className={styles.slider_btn}
                  role={'button'}
                  aria-label={'прошлый проект'}
                  onClick={prevProject}
            />
            {
                projects ? <ProjectCard {...projects[current]}/> :null
            }
            <Right className={styles.slider_btn}
                   role={'button'}
                   aria-label={'следующий проект'}
                   onClick={nextProject}
            />
        </div>
    </section>
}