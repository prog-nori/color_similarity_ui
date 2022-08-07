import { FC } from 'react'
import { useParams } from 'react-router-dom'
import {
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

export const FindPage: FC = () => {
    let {identifier, page} = useParams()
    console.log(identifier, page)
    return (
        <HorizontalBox>
            <Navigation size='sm' background="#fffffe">
                <VerticalBox>
                    <Menues>
                        <Menu to="/" icon={<HomeRounded fontSize="large" />}>Home</Menu>
                        <Menu to="/blocks/1" icon={<ViewComfyRounded fontSize="large" />}>Block List</Menu>
                        <Menu to="/find" icon={<FindInPageRounded fontSize="large" />} active>Find</Menu>
                    </Menues>
                </VerticalBox>
            </Navigation>
            <Main>
                <VerticalBox>
                { identifier && <h2>{identifier}</h2> }
                { page && <h2>{page}</h2> }
                </VerticalBox>
            </Main>
        </HorizontalBox>
    )
}