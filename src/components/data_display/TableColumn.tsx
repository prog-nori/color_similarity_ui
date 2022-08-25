import { CSSProperties, FC, ReactNode } from 'react'
import styled from 'styled-components'

const StyledTD = styled.td`
padding: 8px 16px;
/* line-height: 1.5; */
/* &:not(:last-child) {
    border-right: solid 1px #d2d2d7;
} */
`

export const TableColumn: FC<{
    style?: CSSProperties,
    onClick?: (event: any) => void,
    children?: ReactNode
}> = ({
    style,
    onClick,
    children
}) => {
    return (
        <StyledTD style={style} onClick={onClick}>
            {children}
        </StyledTD>
    )
}