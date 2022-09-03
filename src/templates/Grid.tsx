import { CSSProperties, FC, ReactNode } from 'react'
import styled from 'styled-components'
import { theme } from '../parts/theme'

const GridWrapper = styled.div`
    display: grid;
    grid-column-gap: 16px;
    grid-row-gap: 32px;
    ${({theme}) => theme.media.xs`
        grid-template-columns: 1fr;
    `}
    ${({theme}) => theme.media.xxl`
        grid-template-columns: ${Array(theme.column).fill('1fr').join(' ')};
    `}
`

GridWrapper.defaultProps = {
    theme: {
        column: 1
    }
}

export const Grid: FC<{
    column: number,
    children: ReactNode,
    style?: CSSProperties
}> = ({column, children, style}) => {
    return (
        <GridWrapper theme={{...theme, column: column}} style={style}>
            {children}
        </GridWrapper>
    )
}