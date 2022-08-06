import { FC } from 'react'
// import { FindPageProps } from '../models'
import { useParams } from 'react-router-dom'

export const FindPage: FC = () => {
    let {identifier, page} = useParams()
    return (
        <div>
            <h1>FindPage</h1>
            { identifier && <h2>{identifier}</h2> }
            { page && <h2>{page}</h2> }
        </div>
    )
}