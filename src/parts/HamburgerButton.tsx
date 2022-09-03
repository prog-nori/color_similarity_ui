import { FC, MouseEvent, ReactNode } from 'react'

import '../assets/common/style/app.scss'

export const HamburgerButton: FC<{
    children?: ReactNode,
    onClick?: (event: MouseEvent<HTMLInputElement>) => void
}> = (props) => {
    return (
        <div className="hamburger-wrapper" {...props}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" role="img" aria-hidden="true">
                <path d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z" fill="#fffffe" />
            </svg>
        </div>
    )
}