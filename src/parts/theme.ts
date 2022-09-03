import { css, CSSObject, SimpleInterpolation } from 'styled-components'

type FirstProps = CSSObject | TemplateStringsArray
type Interpolations = SimpleInterpolation[]

export const theme = {
    media: {
        xs: (first: FirstProps, ...interpolations: Interpolations) => css`
            @media (max-width: 575px) {
                ${css(first, ...interpolations)}
            }
        `,
        sm: (first: FirstProps, ...interpolations: Interpolations) => css`
            @media (min-width: 576px) {
                ${css(first, ...interpolations)}
            }
        `,
        md: (first: FirstProps, ...interpolations: Interpolations) => css`
            @media (min-width: 768px) {
                ${css(first, ...interpolations)}
            }
        `,
        lg: (first: FirstProps, ...interpolations: Interpolations) => css`
            @media (min-width: 992px) {
                ${css(first, ...interpolations)}
            }
        `,
        xl: (first: FirstProps, ...interpolations: Interpolations) => css`
            @media (min-width: 1200px) {
                ${css(first, ...interpolations)}
            }
        `,
        xxl: (first: FirstProps, ...interpolations: Interpolations) => css`
            @media (min-width: 1400px) {
                ${css(first, ...interpolations)}
            }
        `,
    }
}
