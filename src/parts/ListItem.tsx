import { FC, ReactNode } from 'react'

export const ListItem: FC<{
    description?: string,
    children: ReactNode,
    fullWidth?: boolean,
    long?: boolean
}> = ({
    description,
    children,
    fullWidth,
    long
}) => {
    const classes = ['list-item']
    if(fullWidth) {
        classes.push('full-width')
    }
    if(long) {
        classes.push('long')
    }
    return (
        <div className={classes.join(' ')}>
            <span className='list-item-text'>{children}</span>
            {description && <span className='description'>{description}</span>}
        </div>
    )
}