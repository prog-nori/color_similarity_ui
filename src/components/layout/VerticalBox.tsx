import { FC, ReactNode } from 'react'
import styled from 'styled-components'

const Vertical = styled.div`
display: flex;
flex-direction: column;
width: 100%;
`

export const VerticalBox: FC<{ children: ReactNode }> = ({children}) => {
    return (
        <Vertical>
            {children}
        </Vertical>
    )
}