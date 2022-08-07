import { FC, ReactNode } from 'react'
import styled from 'styled-components'

const AppBar = styled.header`
    display: flex;
    align-items: center;
    justify-content: flex-between;
    width: 100%;
    height: 64px;
    padding: 0 24px;
`

export const Header: FC<{children: ReactNode}> = ({children}) => {
    return (
        <AppBar>
            {children}
        </AppBar>
    )
}