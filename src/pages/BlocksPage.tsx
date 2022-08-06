import { FC } from 'react'
import { useParams } from 'react-router-dom'
// import { BlocksPageProps } from '../models' 

export const BlocksPage: FC = () => {
    let { page } = useParams()
    return (
        <div>
            <h1>BlocksPage</h1>
            {page && <h2>{page}</h2>}
        </div>
    )
}