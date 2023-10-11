import styles from './Footer.module.scss';
import { ReactComponent as GitHub } from './../../assets/img/gh.svg';
import { ReactComponent as Telegram } from './../../assets/img/tg.svg';

export const Footer = () => {


    return (<footer className={styles.footer_container}>
        <div className={styles.footer_content}>
            <div className={styles.footer_links}>
                <h3 className={styles.footer_links_title}>social links:</h3>
                <a href='https://github.com/GorgeousGeorge90'
                   target={'_blank'}>
                    <GitHub height={'33px'}
                            width={'33px'}
                            fill={'#eeeeee'}
                    />
                </a>
                <a href='https://t.me/MrStandart90'
                   target={'_blank'}>
                    <Telegram fill={'#eeeeee'}/>
                </a>
            </div>
        </div>
    </footer>)
}