import { makeAutoObservable } from 'mobx';
import { fromPromise, IPromiseBasedObservable } from 'mobx-utils';
import ApiServices from './../api/services';
import { PicsType, ProjectType } from '../types';


class ProjectsStore {
    projects?:IPromiseBasedObservable<ProjectType[]>
    pics?:IPromiseBasedObservable<PicsType[]>

    constructor() {
        makeAutoObservable(this)
    }


     fetchProjects() {
        this.pics = fromPromise(ApiServices.getPics())
        this.projects = fromPromise(ApiServices.getProjects())
     }

}

export default new ProjectsStore()
