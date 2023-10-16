import { ProjectCard } from '../ProjectCard';
import {FC,useState} from 'react';
import styles from './Slider.module.scss';
import { ProjectType } from '../../types';
import { ReactComponent as Left } from '../../assets/img/mini-arrow.svg';
import { ReactComponent as Right } from '../../assets/img/mini-arrow.svg';
import { animate } from 'framer-motion';

type SliderType = {
    projects:ProjectType[],
}

export const Slider:FC<SliderType> = ({projects}) => {
    const [current, setCurrent] = useState<number>(0)
    const el = document.querySelector('#animation')

    const animateEl = (x:number) => el ?  animate(el, { opacity:[0,1], x:[x,0] },
        { duration:0.8, ease:'easeInOut' }
    ):null

    const nextProject = () => {
        if ( current < projects.length - 1 ) {
            setCurrent(prev => prev + 1)
        } else if ( current  === projects.length - 1) {
            setCurrent(0)
        }
        animateEl(-150)
    }

    const prevProject = () => {
        if ( current > 0 ) {
            setCurrent(prev => prev - 1)
        } else if ( current  === 0) {
            setCurrent(projects.length - 1)
        }
        animateEl(150)
    }

    return <section className={styles.slider_container}>
        <div className={styles.slider_content}>
            <div className={styles.slider_btn_group}>
                <Left className={styles.slider_btn_group_item}
                          role={'button'}
                          aria-label={'следующий проект'}
                          onClick={prevProject}
                />
                <Right className={styles.slider_btn_group_item}
                           role={'button'}
                           aria-label={'прошлый проект'}
                           onClick={nextProject}
                />
            </div>
            {
                projects ? <div id={'animation'}>
                    <ProjectCard {...projects[current]}/>
                </div>:null
            }

        </div>
    </section>
}