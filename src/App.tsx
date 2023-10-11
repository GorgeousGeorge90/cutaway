import React, {useEffect} from 'react';
import styles from './App.module.scss';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Personal } from './components/Personal';
import { Bio } from './components/Bio';
import { Slider } from './components/Slider';
import { flowResult } from 'mobx';
import { useStore } from './context';

function App() {
    const store = useStore()

    useEffect(()=> {
        store.projects.fetchProjects()
    },[])



    return (
        <div className={styles.app_wrapper}>
            <div className={styles.app_content}>
                <Header/>
                <React.StrictMode>
                    <main className={styles.app_main}>
                        <Personal/>
                        <Bio/>
                        <Slider/>
                    </main>
                </React.StrictMode>
                <Footer/>
            </div>
        </div>
    );
}

export default App;
