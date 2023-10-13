import React, { lazy, useEffect, Suspense } from 'react';
import styles from './App.module.scss';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Personal } from './components/Personal';
import { useStore } from './context';
import {ProjectsWrapper} from "./components/ProjectsWrapper";


const Skills = lazy(()=> import('./components/Skills/Skills'))

function App() {
    const store = useStore()

    useEffect(()=> {
        store.projects.fetchProjects()
    },[])


    return (
        <div className={styles.app_wrapper}>
            <div className={styles.app_content}>
                <Header/>
                    <main className={styles.app_main}>
                        <Personal/>
                        <ProjectsWrapper/>
                        <Skills/>
                    </main>
                <Footer/>
            </div>
        </div>
    );
}

export default App;
