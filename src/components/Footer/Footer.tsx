import styles from './Footer.module.scss';
import { ReactComponent as GitHub } from './../../assets/img/gh2.svg';
import { ReactComponent as Telegram } from './../../assets/img/tg2.svg';
import { ReactComponent as Vkontakte } from './../../assets/img/vk3.svg';
import { motion } from 'framer-motion';
import {CustomLink} from "../../UI/CustomLink";

type customType = {
    delay:number,
    x:string,
}

const animateLogos = {
    start: {
        opacity:0,
        y:'-100px',
    },
    finish:(custom:customType) => ({
        opacity: 1,
        y:0,
        transition: {
            ease: "easeOut",
            duration: 0.5,
            delay: custom.delay*0.3,
        }
    })
}

const animateText = {
    start: (custom:customType) => ({
        opacity:0,
        x: custom.x,
    }),
    finish:(custom:customType) => ({
        opacity: 1,
        x:0,
        transition: {
            ease: "easeOut",
            duration: 0.5,
            delay: custom.delay*0.3,
        }
    })
}

export const Footer = () => {

    return (<motion.footer
        initial={'start'}
        whileInView={'finish'}
        viewport={{ once: true }}
        className={styles.footer_container}>
        <div className={styles.footer_content}>
            <motion.section
                            variants={animateLogos}
                            custom={{delay:2}}
                            className={styles.footer_links}>
                <CustomLink children={<GitHub/>}
                            href={'https://vk.com/gorgeous_george90'}/>
                <CustomLink children={<Vkontakte/>}
                            href={'https://github.com/GorgeousGeorge90'}/>
                <CustomLink children={<Telegram/>}
                            href={'https://t.me/MrStandart90'}/>
            </motion.section>
            <motion.section className={styles.footer_contacts}>
                <motion.p
                    variants={animateText}
                    custom={{x:'-150px', delay:4}}
                >doroshinegorm@mail.com</motion.p>
                <motion.p
                    variants={animateText}
                    custom={{x:'150px', delay:4}}
                >8(985)-048-88-56</motion.p>
            </motion.section>
        </div>
    </motion.footer>)
}