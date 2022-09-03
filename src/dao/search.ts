import axios, { AxiosResponse } from 'axios'
import { getApiPrefix } from './utility'
import { BlockType } from '../dao/apiImpl'

type FindProps = {
    filename: string
}

type FindResponse = {
    img: string,
    similars: BlockType[]
}

type UploadProps = {
    file: File|null|undefined
}

type UploadResponse = {
    status: number,
    message?: string,
    filename?: string
}

export const findBlocksByImage = async ({filename}: FindProps): Promise<FindResponse> => {
    const apiURL = getApiPrefix('find', filename)
    return await axios.get(apiURL)
        .then((status: AxiosResponse<FindResponse>) => {
            const similars: BlockType[] = []
            console.log(status)
            status.data.similars.forEach((element: BlockType) => {
                element.file = `${process.env.REACT_APP_API_BASE_URL}/${element.file}`
                similars.push(element)
            });
            status.data.similars = similars
            return status.data
        })
        .catch(e => {
            console.log('err:', e)
            return e.response
    })
}

export const uploadImage = async ({file}: UploadProps): Promise<UploadResponse> => {
    if(!file) return {
        status: 500,
        message: `$file is ${typeof file}`
    }
    else {
        const apiURL = getApiPrefix('uploads')
        const formData = new FormData()
        formData.append('image', file)
        return await axios.post(apiURL, formData)
            .then((status: AxiosResponse<UploadResponse>) => {
                return status.data
            })
            .catch(e => {
                return e.response
        })
    }
}