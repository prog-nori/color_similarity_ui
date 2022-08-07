import { FC } from 'react'
import styled from 'styled-components'
import { BlockDefaultProps } from '../../models'

const Container = styled.main`
    display: flex;
    flex-direction: column;
    flex: 1;
    min-height: 100vh;
    /* padding: 16px 24px; */
`

export const Main: FC<BlockDefaultProps> = ({style, children}) => {
    return (
        <Container style={style}>
            {children}
        </Container>
    )
}