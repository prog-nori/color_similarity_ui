import { ChangeEvent, CSSProperties, FC, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import {
    BottomNavigation,
    HorizontalBox,
    Main,
    Menu,
    Menues,
    Navigation,
    Table,
    TableColumn,
    TableHeaderColumn,
    TableHeaderRow,
    TableRow,
    VerticalBox
} from '../components'
import { Pagination } from '@mui/material'
import {
    FindInPageRounded,
    HomeRounded,
    ViewComfyRounded
} from '@mui/icons-material'
import { useNavigate } from 'react-router-dom'
import { useWindowSize } from '../util'

type Blocks = {
    file: string
    red: number
    green: number
    blue: number
    hue: number
    saturation: number
    value: number
    name: string
    rgb: string
    hsv: string
}

export const BlocksPage: FC = () => {
    let { page } = useParams()
    const navigate = useNavigate()
    const [blocks, setBlocks] = useState<Blocks[] | []>([])
    const [length, setLength] = useState<number>(0)
    const [currentPage, setCurrentPage] = useState<number>(Number(page))
    const {width} = useWindowSize()
    // const [navWidth, setNavWidth] = useState<number>(width || window.innerWidth)
    const size = 64
    const navigationStyle: CSSProperties = {position: 'sticky', top: 0}
    axios.defaults.baseURL = 'http://localhost:5000';
    axios.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8';
    axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
    useEffect(() => {
        axios.get(`http://localhost:5000/servicies/v2/blocks/${page}`)
        .then(status => {
            if(status.data !== undefined) {
                setBlocks(status.data.blocks)
                setLength(status.data.size)
            }
        })
        .catch(e => console.log('err:', e))
        console.log(blocks, typeof blocks)
    }, [currentPage])
    
    const handleChange = (e: ChangeEvent<unknown>, value: number) => {
        console.log(e, value)
        navigate(`/blocks/${value}`, {replace: true})
        setCurrentPage(value)
    }
    return (
        <HorizontalBox>
            <Navigation size='sm' background="#fffffe" style={navigationStyle}>
                <VerticalBox>
                    <Menues>
                        <Menu to="/" icon={<HomeRounded fontSize="large" />}>Home</Menu>
                        <Menu to="/blocks/1" icon={<ViewComfyRounded fontSize="large" />} active>Block List</Menu>
                        <Menu to="/find" icon={<FindInPageRounded fontSize="large" />}>Find</Menu>
                    </Menues>
                </VerticalBox>
            </Navigation>
            <Navigation size='lg' style={navigationStyle}>
                <VerticalBox>
                    <p>検索ボックス</p>
                </VerticalBox>
            </Navigation>
            <Main>
                {/* <Header>
                    <h1>Header</h1>
                </Header> */}
                <VerticalBox>
                    <Table style={{marginBottom: '64px'}}>
                        <thead>
                            <TableHeaderRow>
                                <TableHeaderColumn>#</TableHeaderColumn>
                                <TableHeaderColumn>テクスチャ</TableHeaderColumn>
                                <TableHeaderColumn>RGB平均色</TableHeaderColumn>
                                <TableHeaderColumn>HSV平均色</TableHeaderColumn>
                                <TableHeaderColumn>ファイルパス</TableHeaderColumn>
                            </TableHeaderRow>
                        </thead>
                        <tbody>
                            {
                                blocks?.map((aBlock, idx) => (
                                        <TableRow key={idx}>
                                            <TableColumn />
                                            <TableColumn>
                                            <svg width={size} height={size} xmlns="http://www.w3.org/2000/svg">
                                                <image xlinkHref={'http://localhost:5000/' + aBlock.file} width={size} height={size} />
                                            </svg>
                                            </TableColumn>
                                            <TableColumn>{aBlock.rgb}</TableColumn>
                                            <TableColumn>{aBlock.hsv}</TableColumn>
                                            <TableColumn>{aBlock.file}</TableColumn>
                                        </TableRow>
                                    )
                                )
                            }
                        </tbody>
                    </Table>
                </VerticalBox>
                <BottomNavigation style={{width: `${width - 384}px`}}>
                    <Pagination
                        count={Math.ceil(length / size)}
                        size="large"
                        defaultPage={currentPage}
                        onChange={handleChange} />
                </BottomNavigation>
            </Main>
        </HorizontalBox>
    )
}