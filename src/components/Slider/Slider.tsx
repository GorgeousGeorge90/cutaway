import { ProjectCard } from '../ProjectCard';
import { useState } from 'react';
import styles from './Slider.module.scss';
import { observer } from 'mobx-react'
import { useStore } from '../../context';
import next from './../../assets/img/next.png'
import prev from './../../assets/img/prev.png'
import { ReactComponent as Spinner } from './../../assets/img/spinner.svg';
import { PicsType, ProjectType } from '../../types';


export const Slider = observer(() => {
    const { projects:{ projects, pics} } = useStore()
    const [current, setCurrent] = useState(0)

    if (projects?.state === 'pending') {
        return <Spinner/>
    }

    const img = pics?.value as PicsType[]
    const value = projects?.value as ProjectType[]
    if (value && img) {
        value.map(item => {
           img.forEach(el => {
               if (item.id === el.id) {
                   item.pic = el.pic
               }
           })
        })
    }


    const nextProject = () => {
        if ( current < value.length - 1 ) {
            setCurrent(prev => prev + 1)
        } else if ( current  === value.length - 1) {
            setCurrent(0)
        }
    }

    const prevProject = () => {
        if ( current > 0 ) {
            setCurrent(prev => prev - 1)
        } else if ( current  === 0) {
            setCurrent(value.length - 1)
        }
    }

    return <section className={styles.slider_container}>
        <div className={styles.slider_content}>
            <img className={styles.slider_btn}
                 src={prev}
                 alt={'prev'}
                 role={'button'}
                 aria-label={'прошлый проект'}
                 onClick={prevProject}
            />
            {
                value ? <ProjectCard {...value[current]}/>:null
            }
            <img className={styles.slider_btn}
                 src={next}
                 alt={'next'}
                 role={'button'}
                 aria-label={'следующий проект'}
                 onClick={nextProject}
            />
        </div>
    </section>
})