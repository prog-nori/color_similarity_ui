import { CSSProperties, FC, ReactNode } from 'react'
import styled from 'styled-components'

const StyledTH = styled.th`
padding: 8px 16px;
color: #777;
line-height: 1.5;
text-align: left;
user-select: none;
`

export const TableHeaderColumn: FC<{
    style?: CSSProperties,
    children: ReactNode
}> = ({
    style,
    children
}) => {
    return (
        <StyledTH style={style}>
            {children}
        </StyledTH>
    )
}