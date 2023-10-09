import React from 'react';
import styles from './App.module.scss';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Personal } from './components/Personal';
import { Bio } from './components/Bio';

function App() {
    return (
        <div className={styles.app_wrapper}>
            <div className={styles.app_content}>
                <Header/>
                <React.StrictMode>
                    <main className={styles.app_main}>
                        <Personal/>
                        <Bio/>
                    </main>
                </React.StrictMode>
                <Footer/>
            </div>
        </div>
    );
}

export default App;
