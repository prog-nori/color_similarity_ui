import { FC, ReactNode } from 'react'
import styled from 'styled-components'

const StyledTableRow = styled.tr`
    width: 100%;
    background: #fffffe;
`

export const TableHeaderRow: FC<{children: ReactNode }> = ({children}) => {
    return (
        <StyledTableRow>
            {children}
        </StyledTableRow>
    )
}