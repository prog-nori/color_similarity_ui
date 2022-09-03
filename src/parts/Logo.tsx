import { FC } from 'react'
import { Link } from 'react-router-dom'

export const Logo: FC<{}> = () => {
    const SIZE = 12
    const pos0 = SIZE * 0
    const pos1 = SIZE * 1 + 1
    return (
        <div className='logo-wrapper'>
            <Link to={'/'}>
                <a>
                    <div className="svg-wrapper">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            width="25"
                            height="25">
                            <rect x={pos0} y={pos0} width={SIZE} height={SIZE} fill="#FF6450"/>
                            <rect x={pos1} y={pos0} width={SIZE} height={SIZE} fill="#E83C4E"/>
                            <rect x={pos0} y={pos1} width={SIZE} height={SIZE} fill="#FF8F42"/>
                            <rect x={pos1} y={pos1} width={SIZE} height={SIZE} fill="#E8693C"/>
                        </svg>
                    </div>
                    <span>Minecraft<strong>Utility</strong></span>
                </a>
            </Link>
        </div>
    )
}