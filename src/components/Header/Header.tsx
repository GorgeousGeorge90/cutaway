import styles from './Header.module.scss';
import { utils }  from '../../utils/utils';
import { useEffect } from "react";

export const Header = () => {
    useEffect(()=> {
        const content = document.body.querySelector('#content')
        const child = content?.querySelector("h1")


        if (!child) {
            utils.typing(
                'junior frontend developer landing page',
                content,
                'главный заголовок'
            )
        }
    },)

    return (<header className={styles.header_container}>
        <div className={styles.header_content} id='content'/>
    </header>)
}

