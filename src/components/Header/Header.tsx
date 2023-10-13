import styles from './Header.module.scss';
import { motion } from 'framer-motion';
import {transaction} from "mobx";


const animateText = {
    start: {
        opacity: 0,
        x: '-200px',
    },
    finish: (custom:number) => ({
        opacity: 1,
        x: 0,
        transition:{
            ease: "easeOut",
            duration: 1,
            delay: custom*0.2
        },
    })
}


export const Header = () => {

    return (<motion.header
        initial={'start'}
        whileInView={'finish'}
        viewport={{ once: true }}
        className={styles.header_container}>
        <div className={styles.header_content}>
            <motion.h1 variants={animateText}
                       custom={1}
                       className={styles.header_title}>junior frontend developer</motion.h1>
            <motion.p variants={animateText}
                      custom={2}
                      className={styles.header_motivation}>per aspera ad astra</motion.p>
        </div>
    </motion.header>)
}

