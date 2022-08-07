import { FC, ReactNode } from 'react'
import styled from 'styled-components'

const StyledTH = styled.th`
padding: 8px 16px;
line-height: 1.5;
text-align: left;
`

export const TableHeaderColumn: FC<{children: ReactNode }> = ({children}) => {
    return (
        <StyledTH>
            {children}
        </StyledTH>
    )
}