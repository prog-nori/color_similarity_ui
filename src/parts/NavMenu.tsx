import { FC, ReactNode } from 'react'
import { Link } from 'react-router-dom'

import '../assets/common/style/app.scss'

type MenuLinkProps = {
    to: string,
    children: ReactNode,
    icon: JSX.Element,
    active?: boolean
}

export const NavMenu: FC<MenuLinkProps> = ({
    to,
    children,
    icon,
    active
}) => {
    return (
        <li className={active? 'nav-menu active': 'nav-menu'}>
            <Link to={to}>
                <a>
                    <div className="icon-wrapper">
                        {icon}
                    </div>
                    <div className="menu-label">{children}</div>
                </a>
            </Link>
        </li>
    )
}