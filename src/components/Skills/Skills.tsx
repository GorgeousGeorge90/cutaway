import { useId } from 'react';
import styles from './Skills.module.scss';
import {ProgressBar} from "../../UI/ProgressBar";
import {utils} from "../../utils/utils";
import {LineProgressBar} from "../../UI/LineProgressBar";


class BaseSkill {
    constructor(
        public id:string,
        public name:string
    ) {
    }
}

class Skill extends BaseSkill {

    constructor(id:string, name:string, public progress:string) {
         super(id,name)
     }
}


const Skills = () => {
    const id = useId()

    const base_skills = [
        new BaseSkill(`layout-${id}`,'Адаптивная, семантическая верстка;'),
        new BaseSkill(`react_js-${id}`,'Опыт написания React приложений, как на хуках, так и на классовых компонентах;'),
        new BaseSkill(`base_manager-${id}`,'Опыт работы с Redux и ReduxToolkit;'),
        new BaseSkill(`other-${id}`,'Базовое владение  MobX, Zustand, TanStack Query;'),
        new BaseSkill(`english-${id}`,'Английский язык(B1);'),
    ]

    const skills = [
        new Skill(`html-${id}`,'HTML','80'),
        new Skill(`css-${id}`,'CSS/SCSS','80'),
        new Skill(`js-${id}`,'JavaScript','80'),
        new Skill(`ts-${id}`,'TypeScript','70'),
        new Skill(`react-${id}`,'ReactJS','80'),
    ]

    return (<section className={styles.skills_container}>
        <div className={styles.skills_content}>
            <h2 className={styles.skills_title}>my skills</h2>
            <section className={styles.skills_base}>
                <p>Основые навыки:</p>
                <ul>
                    {
                        base_skills.map(item => <li key={item.id}>
                            {item.name}
                        </li>)
                    }
                </ul>
            </section>
            <ul className={styles.skills_list} id={'list'}>
                {
                    skills.map(skill => <li key={skill.id}>
                        <LineProgressBar
                                         id={skill.id}
                                         name={skill.name}
                                         progress={skill.progress}/>
                    </li>)
                }
            </ul>
        </div>
    </section>)
}

export default Skills