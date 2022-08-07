import { FC, ReactNode } from 'react'
import styled from 'styled-components'

const UnOrderedList = styled.ul`
    width: 100%;
`

export const Menues: FC<{ children: ReactNode }> = ({children}) => {
    return (
        <UnOrderedList>
            {children}
        </UnOrderedList>
    )
}