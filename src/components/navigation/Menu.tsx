import { FC, ReactNode } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const List = styled.li`
display: flex;
align-items: center;
width: 100%;
height: 68px;
border-radius: 16px;
line-height: 1.5;
transition: background .1s;
`

type MenuLinkProps = {
    to: string,
    children: ReactNode,
    icon?: JSX.Element,
    active?: boolean
}

export const Menu: FC<MenuLinkProps> = (props) => {
    return (
        <List className={props.active? 'menu active': 'menu'}>
            <Link to={props?.to}>
                {props?.icon}
                {/* <span style={{marginLeft: '16px'}}>{props?.children}</span> */}
            </Link>
        </List>
    )
}