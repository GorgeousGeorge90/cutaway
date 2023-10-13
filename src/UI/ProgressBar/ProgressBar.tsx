import { FC } from 'react';
import './ProgressBar.scss';


type ProgressBarProps = {
    name:string,
    progress:string,
}

export const ProgressBar:FC<ProgressBarProps> = ({name,progress}) => {


    return (<div className={'progress'}>
        <div className={'item left'}/>
        <div className={'item right'}/>
        <div className={'content'}>
            <p>{name}</p>
            <p className={'percent'}>{progress}</p>
        </div>
    </div>)
}