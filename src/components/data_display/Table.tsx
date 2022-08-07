import { FC } from 'react'
import styled from 'styled-components'
import { BlockDefaultProps } from '../../models'

const StyledTable = styled.table`
    width: 100%;
    border-collapse:collapse;
`

export const Table: FC<BlockDefaultProps> = ({style, children}) => {
    return (
        <StyledTable style={style}>
            {children}
        </StyledTable>
    )
}