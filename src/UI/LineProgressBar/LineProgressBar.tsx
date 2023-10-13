import { FC } from 'react';
import { motion } from 'framer-motion';
import styles from './LineProgressBar.module.scss';


type LineProgressBarProps = {
    id:string,
    name:string,
    progress:string,
}

const progressAnimation = {
    start: {
        opacity: 0,
        width: 0,
    },
    finish: (custom:string) => ({
        opacity: 1,
        width: custom + '%',
    })
}

export const LineProgressBar: FC<LineProgressBarProps> = ({id, name, progress}) => {

    return (<motion.div initial='start'
                        whileInView='finish'
                        viewport={{ once: true }}
                        className={styles.bar_container}>
                <div className={styles.bar_content}>
                    <label className={styles.bar_label}
                            htmlFor={id}>{name}</label>
                    <div className={styles.bar_skill} id={id}>
                        <motion.div variants={progressAnimation}
                                    custom={progress}
                                    transition={{ ease: "easeOut", duration: 1 }}
                            className={styles.bar_skill_item}>
                            <div className={styles.bar_skill_item_progress}>
                                    {progress}%
                            </div>
                        </motion.div>
                    </div>
                </div>
    </motion.div>)
}