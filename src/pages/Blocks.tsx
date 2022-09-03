import {
    ChangeEvent,
    FC,
    useEffect,
    useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { Pagination } from '@mui/material'

import { ListItem, Logo } from '../parts'
import { Grid, Navigation } from '../templates'
import { getBlocksByPage } from '../dao'

import '../assets/common/style/app.scss'

type BlockType = {
    file: string
    name: string
    red: number
    green: number
    blue: number
    hue: number
    saturation: number
    value: number
    rgb: string
    hsv: string
}

type ApiProps = {blocks: BlockType[], size: number}

export const Blocks: FC = () => {
    let { page } = useParams()
    const navigate = useNavigate()

    const [pageNumber, setPageNumber] = useState<number>(1)
    const [countOfPage, setCountOfPage] = useState<number>(1)
    const [apiResponse, setApiResponse] = useState<ApiProps>({
        blocks: [],
        size: 0
    })

    const limit = 50

    useEffect(() => {
        const p = !(page && parseInt(page))? 1: parseInt(page)
        setPageNumber(p)
        getBlocksByPage({page: p}).then((res: ApiProps) => {
                setApiResponse(res)
                setCountOfPage(Math.ceil(res.size / limit))
            }
        )
    }, [page])
    useEffect(() => console.log('count', countOfPage), [countOfPage])

    const handleChange = (e: ChangeEvent<unknown>, value: number) => {
        console.log(e)
        navigate(`/blocks/${value}`, {replace: true})
        window.scrollTo(0, 0)
    }

    return (
        <div className="container">
            <Navigation />
            <div className="wrapper">
                <header className="header">
                    <Logo />
                </header>
                <main>
                    <Grid column={1}>
                        <div>
                            <div className="list-wrapper">
                                <ul>
                                    {
                                        apiResponse.blocks.map((aBlock: BlockType) => {
                                            const aPath = aBlock.file.split('.svg')[0]
                                            const splitted = aPath.split('/')
                                            const description = splitted[splitted.length - 1]
                                            return (
                                                <li key={description}>
                                                    <div className="list-container">
                                                        <div className="list-thumbnail">
                                                            <svg
                                                                width="40" height="40"
                                                                xmlns="http://www.w3.org/2000/svg">
                                                                <image xlinkHref={aBlock.file}
                                                                width="40" height="40" />
                                                            </svg>
                                                        </div>
                                                        <ListItem description={description} fullWidth>{aBlock.name}</ListItem>
                                                        <ListItem>{aBlock.rgb}</ListItem>
                                                    </div>
                                                </li>
                                            )}
                                        )
                                    }
                                </ul>
                            </div>
                        </div>
                    </Grid>
                    <div className="bottom-navigation">
                        <Pagination
                            count={countOfPage}
                            size="large"
                            defaultPage={pageNumber}
                            onChange={handleChange} />
                    </div>
                </main>
            </div>
        </div>
    )
}