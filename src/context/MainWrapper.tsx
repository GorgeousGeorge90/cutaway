import { createContext, FC, ReactNode, useContext } from 'react';
import RootStore from '../store/RootStore';

const RootStoreContext = createContext<RootStore | null>(null)

type WrapperProps = {
    children:ReactNode,
}

export const MainWrapper:FC<WrapperProps> = ({children}) => {

    return (<RootStoreContext.Provider value={new RootStore()}>
        {children}
    </RootStoreContext.Provider>)
}

export const useStore = () =>  {
    const context = useContext(RootStoreContext)

    if (!context) {
        throw new Error('Ypu must take app into wrapper!')
    }

    return context
}
