import { FC, ReactNode } from 'react'

export const ListLabel: FC<{
    children: ReactNode
}> = ({children}) => {
    return (
        <h3 className='list-label'>
            {children}
        </h3>
    )
}