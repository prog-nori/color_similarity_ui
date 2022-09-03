import {
    ChangeEvent,
    FC,
    FormEvent,
    useEffect,
    useState } from 'react'
import {
    useParams,
} from 'react-router-dom'

import {
    ListItem,
    Logo,
    InputTypeFile,
    SubmitButton,
    Notification
} from '../parts'
import { Grid, Navigation } from '../templates'
import { findBlocksByImage, uploadImage } from '../dao'
import { BlockType } from '../dao/apiImpl'

import '../assets/common/style/app.scss'

type UploadResponse = {
    status: number,
    message?: string,
    filename?: string
}

type FindResponse = {
    img: string,
    similars: BlockType[]
}

export const Search: FC = () => {
    let { image } = useParams()
    useEffect(() => console.log('image:', image), [image])

    const [selectedFileName, setSelectedFileName] = useState<string>('')
    const [searchResult, setSearchResult] = useState<BlockType[]>([])
    const [searchTargetFile, setSearchTargetFile] = useState<File|undefined>(undefined)
    const [uploadSuccess, setUploadSuccess] = useState<boolean|undefined>(undefined)
    const [searchSuccess, setSearchSuccess] = useState<boolean|undefined>(undefined)
    const [filenameTooLongError, setFilenameTooLongError] = useState<boolean>(false)

    const handleFileSelected = (e: ChangeEvent<unknown>) => {
        e.preventDefault()
        const files: FileList = ((e.target as HTMLInputElement).files as FileList)
        if(files.length > 0) {
            setSelectedFileName(files[0].name)
            setSearchTargetFile(files[0])
        }
    }

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if(searchTargetFile === undefined) {
            console.log('search targetfile is undefined')
            return
        }
        const splittedFilePath = searchTargetFile.name.split('/')
        if(splittedFilePath[splittedFilePath.length - 1].length <= 60) {
            setFilenameTooLongError(false)
            uploadImage({file: searchTargetFile})
                .then((res: UploadResponse) => {
                    console.log({ status: res.status, message: res.message, filename: res.filename })
                    setUploadSuccess(res.status === 200)
                    if(res.status === 200 && res.filename) {
                        findBlocksByImage({filename: res.filename})
                            .then((resp: FindResponse) => {
                                setSearchSuccess(true)
                                setSearchResult(resp.similars)
                                console.log(resp.similars)
                            })
                            .catch(e => {
                                console.log(e)
                            })
                    }
                })
                .catch((err: UploadResponse) => {
                    console.log({ status: err.status, message: err.message, filename: err.filename })
                    setUploadSuccess(false)
                })
        } else {
            console.log(`filename.length is over 60. is is ${splittedFilePath[splittedFilePath.length - 1].length}`)
            setFilenameTooLongError(true)
        }
    }

    return (
        <div className="container">
            <Navigation />
            <div className="wrapper">
                <header className="header">
                    <Logo />
                </header>
                <main>
                    { uploadSuccess === false && <Notification type='err' isShow={true}>画像のアップロードに失敗しました</Notification> }
                    { filenameTooLongError && <Notification type='err' isShow={true}>もうちょっと短いファイル名でお願いします（最大255文字）</Notification> }
                    { searchSuccess && <Notification type='success' isShow={true}>検索に成功しました</Notification> }

                    {/* <Notification type='info' isShow={true}>infoテスト</Notification>
                    <Notification type='success' isShow={true}>successテスト</Notification>
                    <Notification type='warn' isShow={true}>warnテスト</Notification>
                    <Notification type='err' isShow={true}>errorテスト</Notification> */}
                    <form
                        id='search-form'
                        name='search-form'
                        className='row'
                        method='post'
                        onSubmit={handleSubmit}>
                        <InputTypeFile
                            name='image'
                            label='画像ファイル'
                            value={selectedFileName}
                            onChange={handleFileSelected}
                            accept={['image/png']}
                            required
                            />
                        <SubmitButton withMarginTop>画像で検索</SubmitButton>
                    </form>
                    {
                        searchResult.length > 0 && (
                            <Grid column={1}>
                                <div>
                                    <div className="list-wrapper">
                                        <ul>
                                            {
                                                searchResult && searchResult.map((aBlock: BlockType) => {
                                                    const aPath = aBlock.file.split('.svg')[0]
                                                    const splitted = aPath.split('/')
                                                    const description = splitted[splitted.length - 1]
                                                    return (
                                                        <li key={description}>
                                                            <div className="list-container">
                                                                <div className="list-thumbnail">
                                                                    <svg width="40" height="40" xmlns="http://www.w3.org/2000/svg">
                                                                        <image xlinkHref={aBlock.file} width="40" height="40" />
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
                        )
                    }
                </main>
            </div>
        </div>
    )
}