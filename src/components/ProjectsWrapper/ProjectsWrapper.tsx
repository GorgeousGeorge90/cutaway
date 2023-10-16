import { useStore } from '../../context';
import { ReactComponent as Spinner } from '../../assets/img/spinner.svg';
import { PicsType, ProjectType } from '../../types';
import { Slider } from '../Slider';
import styles from './ProjectsWrapper.module.scss';
import { observer } from "mobx-react";

export const ProjectsWrapper = observer(() => {
    const { projects:{ projects, pics} } = useStore()

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

    return (<section className={styles.wrapper_container}>
        <div className={styles.wrapper_content}>
            <h2 className={styles.wrapper_title}>my projects examples</h2>
            <p className={styles.wrapper_text}>see others on my GitHub</p>
            {
               drafts ? <Slider projects={drafts}/>:null
            }
        </div>
        </section>)
})
