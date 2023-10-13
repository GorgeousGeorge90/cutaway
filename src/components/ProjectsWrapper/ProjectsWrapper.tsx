import { useState } from 'react';
import { useStore } from '../../context';
import { ReactComponent as Spinner } from '../../assets/img/spinner.svg';
import { PicsType, ProjectType } from '../../types';
import { Slider } from '../Slider';
import styles from './ProjectsWrapper.module.scss';
import { observer } from "mobx-react";



type StackType = 'All Projects' | 'With Database' | 'Without Database'
type VariationsType = Record<StackType, ProjectType[]>

export const ProjectsWrapper = observer(() => {
    const { projects:{ projects, pics} } = useStore()
    const [ current, setCurrent ] = useState<StackType>('All Projects')

    if (projects?.state === 'pending') {
        return <section className={styles.wrapper_container}>
            <Spinner/>
        </section>
    }

    const img = pics?.value as PicsType[]
    const drafts = projects?.value as ProjectType[]
    if (drafts && img) {
        drafts.map(item => {
            img.forEach(el => {
                if (item.id === el.id) {
                    item.pic = el.pic
                }
            })
        })
    }

    const variations:VariationsType = {
        'All Projects':drafts,
        'With Database':drafts?.filter(item => item.database),
        'Without Database':drafts?.filter(item => !item.database),
    }

    return (<section className={styles.wrapper_container}>
        <div className={styles.wrapper_content}>
            <h2 className={styles.wrapper_title}>my projects examples</h2>
            <p className={styles.wrapper_text}>see others on my GitHub</p>
            <menu className={styles.wrapper_menu}
                  type={'toolbar'}>
                {
                    variations ? Object.keys(variations).map(item => <li key={item}>
                        <button className={styles.wrapper_menu_btn}
                                type={'button'}
                                aria-label={'выбор'}
                                data-current={ current === item }
                                onClick={()=>setCurrent(item as StackType)}>
                            {item}
                        </button>
                    </li>):null
                }
            </menu>
            {
               variations ? <Slider projects={variations[current]}/>:null
            }
        </div>
        </section>)
})
