import { FC, useState } from 'react'
import { useLocation } from 'react-router-dom'
import {
    FindInPageRounded,
    GridViewRounded,
    HomeRounded,
} from '@mui/icons-material'

import { HamburgerButton, NavMenu } from '../parts'

import '../assets/common/style/app.scss'

export const Navigation: FC = () => {
    const [toggle, setToggle] = useState<boolean>(true)
    const location = useLocation()
    const currentPathname = location.pathname.split('/')[1] || ''

    return (
        <nav className={toggle? 'side-navigation': 'side-navigation small'}>
            <div className="nav-wrapper">
                <div className="header nav-header">
                    <HamburgerButton onClick={() => setToggle(!toggle)} />
                </div>
                <div className="main nav-main">
                    <ul>
                        <NavMenu to={'/'} icon={ <HomeRounded /> } active={currentPathname === 'home'}>Home</NavMenu>
                        <NavMenu to={'/blocks/1'} icon={ <GridViewRounded /> } active={currentPathname === 'blocks'}>Blocks</NavMenu>
                        <NavMenu to={'/search'} icon={ <FindInPageRounded /> } active={currentPathname === 'search'}>Search</NavMenu>
                    </ul>
                </div>
            </div>
        </nav>
    )
}