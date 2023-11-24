import supabase from './client';
import { ProjectType, PicsType } from '../types';



class ApiServices {
    private baseUrl = 'https://uhhpxrydhbzktznkfszl.supabase.co/storage/v1/object/public/projects_pic/pics/'
    async getProjects() {
        let { data: projects, error } = await supabase
            .from('projects')
            .select('*')

        return projects as ProjectType[]
    }

    async getPics() {
        const films = await fetch(`${this.baseUrl}films.png`)
        const search = await fetch(`${this.baseUrl}search.png`)
        const todo = await fetch(`${this.baseUrl}todo.png`)
        const games = await fetch(`${this.baseUrl}games.png`)
        const chess = await fetch(`${this.baseUrl}chess.png`)
        return [
            { id:1, pic:films.url },
            { id:2, pic:search.url },
            { id:3, pic:todo.url },
            { id:4, pic:games.url },
            { id:5, pic:chess.url },
        ] as PicsType[]
    }
}

export default new ApiServices()

