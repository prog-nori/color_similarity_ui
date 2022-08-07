import {
    FC
} from 'react'
import styled from 'styled-components'
import {
    VerticalBox,
} from '../index'
import { BlockDefaultProps } from '../../models'

const Nav = styled.nav`
    width: ${({theme}) => theme.size};
    height: 100vh;
    padding: 16px 8px;
    border-right: solid 1px #d2d2d7;
    background: ${({theme}) => theme.background};
    overflow: hidden scroll;
    transition: width .2s;
`

type Size = 'sm' | 'lg'
type Background = 'default' | 'secondary' | string
interface Props extends BlockDefaultProps {
    size?: Size,
    background?: Background
}

export const Navigation: FC<Props> = ({
    size,
    background,
    style,
    children
}) => {
    const width = (() => {
        if(size === 'sm') { return '84px' }
        else if(size === 'lg') { return '300px' }
        else { return '240px' }
    })()
    const bg = (() => {
        if(background) { return background }
        else { return '#f5f5f7' }
    })()
    const navTheme = {
        size: width,
        background: bg
    }
    return (
        <Nav theme={navTheme} style={style}>
            <VerticalBox>
                {children}
            </VerticalBox>
        </Nav>
    )
}