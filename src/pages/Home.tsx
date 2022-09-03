import { FC } from 'react'
import { ListItem, ListLabel, Logo } from '../parts'
import { Grid, Navigation } from '../templates'

import '../assets/common/style/app.scss'

export const Home: FC = () => {
    return (
        <div className="container">
            <Navigation />
            <div className="wrapper">
                <header className="header">
                    <Logo />
                </header>
                <main>
                    <Grid column={3}>
                        <div>
                            <ListLabel>最近検索したブロック</ListLabel>
                            <div className="list-wrapper">
                                <ul>
                                    <li>
                                        <div className="list-container">
                                            <div className="list-thumbnail">
                                                <svg
                                                    width="40" height="40"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <image xlinkHref={`${process.env.REACT_APP_API_BASE_URL}/images/svg/textures/block/weathered_cut_copper.svg`}
                                                    width="40" height="40" />
                                                </svg>
                                            </div>
                                            <ListItem description='weatherd_cut_copper' fullWidth>錆止めされた酸化した切り込み入りの銅のハーフブロック</ListItem>
                                            <ListItem>rgb(109, 145, 108)</ListItem>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="list-container">
                                            <div className="list-thumbnail">
                                                <svg
                                                    width="40" height="40"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <image xlinkHref={`${process.env.REACT_APP_API_BASE_URL}/images/svg/textures/block/weathered_cut_copper.svg`}
                                                    width="40" height="40" />
                                                </svg>
                                            </div>
                                            <ListItem description='weatherd_cut_copper' fullWidth>酸化した切り込み入りの銅</ListItem>
                                            <ListItem>rgb(109, 145, 108)</ListItem>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div>
                            <ListLabel>最近閲覧したブロック</ListLabel>
                            <div className="list-wrapper">
                                <ul>
                                    <li>
                                        <div className="list-container">
                                            <div className="list-thumbnail">
                                                <svg
                                                    width="40" height="40"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <image xlinkHref={`${process.env.REACT_APP_API_BASE_URL}/images/svg/textures/block/weathered_cut_copper.svg`}
                                                    width="40" height="40" />
                                                </svg>
                                            </div>
                                            <ListItem description='weatherd_cut_copper' fullWidth>酸化した切り込み入りの銅</ListItem>
                                            <ListItem>rgb(109, 145, 108)</ListItem>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="list-container">
                                            <div className="list-thumbnail">
                                                <svg
                                                    width="40" height="40"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <image xlinkHref={`${process.env.REACT_APP_API_BASE_URL}/images/svg/textures/block/weathered_cut_copper.svg`}
                                                    width="40" height="40" />
                                                </svg>
                                            </div>
                                            <ListItem description='weatherd_cut_copper' fullWidth>酸化した切り込み入りの銅</ListItem>
                                            <ListItem>rgb(109, 145, 108)</ListItem>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div>
                            <ListLabel>最近検索した画像</ListLabel>
                            <div className="list-wrapper">
                                <ul>
                                    <li>
                                        <div className="list-container">
                                            <div className="list-thumbnail">
                                                <svg
                                                    width="40" height="40"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <image xlinkHref={`${process.env.REACT_APP_API_BASE_URL}/images/svg/textures/block/weathered_cut_copper.svg`}
                                                    width="40" height="40" />
                                                </svg>
                                            </div>
                                            <ListItem description='weatherd_cut_copper' fullWidth>酸化した切り込み入りの銅</ListItem>
                                            <ListItem>rgb(109, 145, 108)</ListItem>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="list-container">
                                            <div className="list-thumbnail">
                                                <svg
                                                    width="40" height="40"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <image xlinkHref={`${process.env.REACT_APP_API_BASE_URL}/images/svg/textures/block/weathered_cut_copper.svg`}
                                                    width="40" height="40" />
                                                </svg>
                                            </div>
                                            <ListItem description='weatherd_cut_copper' fullWidth>酸化した切り込み入りの銅</ListItem>
                                            <ListItem>rgb(109, 145, 108)</ListItem>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </Grid>
                </main>
            </div>
        </div>
    )
}