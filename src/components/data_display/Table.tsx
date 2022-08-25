import { FC } from 'react'
import styled from 'styled-components'
import { BlockDefaultProps } from '../../models'

const StyledTable = styled.table`
    width: 100%;
    border-collapse:collapse;
    /* background: linear-gradient(to bottom, #69b3ff, #fffffe); */
    /* background: linear-gradient(to bottom, #527e99, #88a5b7, #acbdc7); */
`

export const Table: FC<BlockDefaultProps> = ({style, children}) => {
    return (
        <StyledTable style={style}>
            {children}
        </StyledTable>
    )
}