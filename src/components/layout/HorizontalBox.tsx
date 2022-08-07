import { CSSProperties, FC, ReactNode } from 'react'
import styled from 'styled-components'

const Horizon = styled.div`
display: flex;
position: relative;
width: 100%;
`

export const HorizontalBox: FC<{ style?: CSSProperties, children: ReactNode }> = ({style, children}) => {
    return (
        <Horizon style={style}>
            {children}
        </Horizon>
    )
}