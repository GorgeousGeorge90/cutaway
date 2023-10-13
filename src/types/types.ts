


export type ProjectType = {
    id: number,
    name: string,
    pic: string | null,
    description: string,
    stack: string[],
    link: string,
    database: boolean,
}

export type PicsType = Pick< ProjectType, 'id' | 'pic'>