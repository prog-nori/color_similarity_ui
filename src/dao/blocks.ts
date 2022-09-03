import axios, { AxiosResponse } from 'axios'
import { getApiPrefix } from './utility'
import { BlockType } from '../dao/apiImpl'

type Props = {
    page: number
}

type ApiProps = {blocks: BlockType[], size: number}

export const getBlocksByPage = async ({page}: Props): Promise<ApiProps> => {
    const apiURL = getApiPrefix('blocks', page)
    const defaultResponse = {
        blocks: [],
        size: 0
    }
    return await axios.get(apiURL)
        .then((status: AxiosResponse<ApiProps>) => {
            if(status.data !== undefined) {
                const blocks = []
                status.data.blocks.forEach(element => {
                    element.file = `${process.env.REACT_APP_API_BASE_URL}/${element.file}`
                    blocks.push(element)
                });
                return {
                    blocks: status.data.blocks,
                    size: status.data.size
                }
            }
            else {
                return defaultResponse
            }
        })
        .catch(e => {
            console.log('err:', e)
            return defaultResponse
        })
}