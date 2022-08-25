import {
    ChangeEvent,
    CSSProperties,
    FC,
    useEffect,
    useState,
    useRef } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import styled from 'styled-components'
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
import { useGetElementProperty } from '../util'

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
    const mainRef = useRef(null)
    const { getElementProperty } = useGetElementProperty<HTMLDivElement>(mainRef)
    // const [navWidth, setNavWidth] = useState<number>(width || window.innerWidth)
    const [bottomNavigationWidth, setBottomNavigationWidth] = useState<string>('1000px')
    const svgSize = 40
    const limit = 50
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
    }, [currentPage])

    useEffect(() => {
        console.log('useEffect')
        console.log(getElementProperty('width'))
        setBottomNavigationWidth(`${getElementProperty('width')}px`)
    }, [mainRef])

    const Pointer = styled.span`&:hover{cursor: pointer}`
    
    const handleChange = (e: ChangeEvent<unknown>, value: number) => {
        console.log(e)
        navigate(`/blocks/${value}`, {replace: true})
        setCurrentPage(value)
    }

    const handleCopy = (str: string) => {
        const splitted = str.split('/')
        if(splitted.length > 1) {
            navigator.clipboard.writeText(splitted[splitted.length - 1])
        }
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
            {/* <Navigation size='lg' style={navigationStyle}>
                <VerticalBox>
                    <p>検索ボックス</p>
                </VerticalBox>
            </Navigation> */}
            <Main ref={mainRef}>
                <VerticalBox>
                    <Table style={{marginBottom: '63px'}}>
                        <thead>
                            <TableHeaderRow>
                                <TableHeaderColumn>#</TableHeaderColumn>
                                <TableHeaderColumn style={{width: '35px'}}>#</TableHeaderColumn>
                                <TableHeaderColumn>RGB</TableHeaderColumn>
                                {/* <TableHeaderColumn>HSV</TableHeaderColumn> */}
                                <TableHeaderColumn>File</TableHeaderColumn>
                            </TableHeaderRow>
                        </thead>
                        <tbody>
                            {
                                blocks?.map((aBlock, idx) => (
                                        <TableRow key={idx}>
                                            <TableColumn />
                                            <TableColumn style={{
                                                width: '35px',
                                                height: '35px',
                                                background: '#888888',
                                                // background: '#e6eff4',
                                                // background: '#79797979',
                                                textAlign: 'center'}}>
                                            <svg width={svgSize} height={svgSize} xmlns="http://www.w3.org/2000/svg">
                                                <image xlinkHref={'http://localhost:5000/' + aBlock.file} width={svgSize} height={svgSize} />
                                            </svg>
                                            </TableColumn>
                                            <TableColumn onClick={() => { console.log(mainRef) }}>{aBlock.rgb}</TableColumn>
                                            {/* <TableColumn>{aBlock.hsv}</TableColumn> */}
                                            <TableColumn onClick={() => {
                                                if(aBlock.file !== undefined){
                                                    handleCopy(aBlock.file)
                                                }
                                                }}>
                                                    <Pointer>
                                                        {aBlock.file}
                                                    </Pointer>
                                                </TableColumn>
                                        </TableRow>
                                    )
                                )
                            }
                        </tbody>
                    </Table>
                </VerticalBox>
                <BottomNavigation style={{width: bottomNavigationWidth}}>
                    <Pagination
                        count={Math.ceil(length / limit)}
                        size="large"
                        defaultPage={currentPage}
                        onChange={handleChange} />
                </BottomNavigation>
            </Main>
        </HorizontalBox>
    )
}