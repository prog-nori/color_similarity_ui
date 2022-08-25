import { forwardRef, ForwardRefExoticComponent } from 'react'
import styled from 'styled-components'

const Container = styled.main`
    display: flex;
    flex-direction: column;
    flex: 1;
    min-height: 100vh;
`

export const Main: ForwardRefExoticComponent<any> = forwardRef((props, ref) => {
    const { ...restProps } = props
    return (
        <Container {...restProps} ref={ref} style={props?.style}>
            {props?.children}
        </Container>
    )
})