import { FC, ReactNode } from 'react'
import styled from 'styled-components'

const StyledTableRow = styled.tr`
    width: 100%;
    &:nth-child(odd) {
        background: #f5f5f7;
    }
    &:nth-child(even) {
        background: #fffffe;
    }
`

export const TableRow: FC<{children: ReactNode }> = ({children}) => {
    return (
        <StyledTableRow>
            {children}
        </StyledTableRow>
    )
}