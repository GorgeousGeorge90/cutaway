import { FC, ReactNode } from 'react';


type CustomLinkProps = {
    children:ReactNode,
    href:string,
}

export const CustomLink:FC<CustomLinkProps> = ({children,href}) => {

    return (<a href={href}
               target={'_blank'}>
        {children}
    </a>)
}