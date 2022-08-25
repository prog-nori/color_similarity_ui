import { FC, ReactNode } from 'react'
import styled from 'styled-components'

const StyledTableRow = styled.tr`
    width: 100%;
    /* background: #fffffe; */
    /* border-bottom: solid 1px #eee; */
    border-bottom: solid 1px rgba(238, 238, 238, 0.25);
    /* &:nth-child(odd) {
        background: #f5f5f7;
    }
    &:nth-child(even) {
        background: #fffffe;
    } */
`

export const TableRow: FC<{children: ReactNode }> = ({children}) => {
    return (
        <StyledTableRow>
            {children}
        </StyledTableRow>
    )
}