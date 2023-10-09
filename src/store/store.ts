import { makeAutoObservable } from 'mobx';


export type ProjectType = {
    id: number,
    name: string,
    pic: string | null,
    description: string,
    stack: string[],
    link: string,
}

class Store  {
    private base: ProjectType[] = [
        {
            id:1,
            name:'KinoMonster',
            pic:null,
            description:`This is app about films! You can find information about top films
            ,search a current film, read films news from New York Times and leave some comments!`,
            stack:['HTML','SCSS','TailwindCSS','TypeScript','ReduxToolkit'],
            link:'https://kino-monster.vercel.app/',
        },
        {
            id:2,
            name:'KinoMonster',
            pic:null,
            description:`This is app about films! You can find information about top films
            ,search a current film, read films news from New York Times and leave some comments!`,
            stack:['HTML','SCSS','TailwindCSS','TypeScript','ReduxToolkit'],
            link:'https://kino-monster.vercel.app/',
        },

    ]

    constructor() {
        makeAutoObservable(this)
    }

    get getProjects() {
        return this.base
    }
}

export default new Store()