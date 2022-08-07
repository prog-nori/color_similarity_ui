import { FC } from 'react'
import {
    // Header,
    HorizontalBox,
    Main,
    Menu,
    Menues,
    Navigation,
    VerticalBox
} from '../components'

import {
    FindInPageRounded,
    HomeRounded,
    ViewComfyRounded
} from '@mui/icons-material'

export const TopPage: FC = () => {
    return (
        <HorizontalBox>
            <Navigation size='sm' background="#fffffe">
                <VerticalBox>
                    <Menues>
                        <Menu to="/" icon={<HomeRounded fontSize="large" />} active>Home</Menu>
                        <Menu to="/blocks/1" icon={<ViewComfyRounded fontSize="large" />}>Block List</Menu>
                        <Menu to="/find" icon={<FindInPageRounded fontSize="large" />}>Find</Menu>
                    </Menues>
                </VerticalBox>
            </Navigation>
            <Main>
                {/* <Header>
                    <h1>Header</h1>
                </Header> */}
                <VerticalBox>
                    Contents
                </VerticalBox>
            </Main>
        </HorizontalBox>
    )
}