import {
    FC,
    ReactNode
} from 'react'
import styled from 'styled-components'
import { HorizontalBox } from './HorizontalBox'

const Nav = styled.nav`
    position: fixed;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 64px;
    padding: 16px 8px;
    border-top: solid 1px #d2d2d7;
    background: rgba(255, 255, 255, 0.5);
    backdrop-filter: blur(20px);
    overflow: hidden scroll;
    transition: width .2s;
`

export const BottomNavigation: FC<{ children: ReactNode }> = ({
    children
}) => {
    return (
        <Nav>
            <HorizontalBox style={{justifyContent: 'center'}}>
                {children}
            </HorizontalBox>
        </Nav>
    )
}