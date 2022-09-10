import { ChangeEvent, DragEvent, FC, MouseEvent, ReactNode } from 'react'
import { ImageRounded } from '@mui/icons-material'
import { DropzoneInputProps } from 'react-dropzone'

type FormInputProps = {
    label: string,
    name: string,
    value?: string|number|boolean,
    placeholder?: string,
    onChange?: (e: ChangeEvent<unknown>) => void,
    getRootProps?: any,
    getInputProps?: <T extends DropzoneInputProps>(props?: T | undefined) => T,
    accept?: string[],
    required?: boolean
}

export const InputTypeText: FC<FormInputProps> = ({
    name,
    label,
    placeholder,
    onChange,
    required
}) => {
    return (
        <div className="input-wrapper">
            <span className="input-label">{label}</span>
            <input
                name={name}
                type="text"
                onChange={onChange}
                placeholder={placeholder}
                required={required} />
        </div>
    )
}

export const InputTypeFile: FC<FormInputProps> = ({
    name,
    label,
    value,
    onChange,
    // getRootProps,
    // getInputProps,
    accept=[],
    required
}) => {
    return (
        <div className="input-wrapper">
            <span className="input-label">{label}</span>
            <label htmlFor={name}>
                <span>
                    {!value && 'ファイルが選択されていません'}
                    {value && value}
                </span>
                <input
                type="file"
                // {...getInputProps()}
                id={name}
                name={name}
                maxLength={60}
                onChange={onChange}
                accept={accept.join(',')}
                required={required}
                />
            </label>
        </div>
    )
}

// type ButtonProps = {
//     value: string | number
// }

// export const InputTypeSubmit: FC<ButtonProps> = ({
//     value
// }) => {
//     return (
//         <div className="input-wrapper">
//             <input type="submit" value={value} />
//         </div>
//     )
// }

interface ButtonProps {
    children: ReactNode,
    withMarginTop?: boolean
}

export const SubmitButton: FC<ButtonProps> = ({
    children,
    withMarginTop
}) => {
    const wrapperClassList=  ['input-another-wrapper']
    if(withMarginTop) {
        wrapperClassList.push('with-margin-top')
    }
    return (
        <div className={wrapperClassList.join(' ')}>
            <button type='submit'>
                <span className="inner-button">{children}</span>
            </button>
            {/* <input type="submit" value={value} /> */}
        </div>
    )
}

export const Button: FC<ButtonProps & {
    onClick?: (e: MouseEvent<HTMLButtonElement>) => void,
    type?: 'button' | 'reset' | 'submit' | undefined
}> = ({
    children,
    onClick,
    type='button',
    withMarginTop
}) => {
    const wrapperClassList=  ['input-another-wrapper']
    if(withMarginTop) {
        wrapperClassList.push('with-margin-top')
    }
    return (
        <div className={wrapperClassList.join(' ')}>
            <button type={type} onClick={onClick}>
                <span className="inner-button">{children}</span>
            </button>
            {/* <input type="submit" value={value} /> */}
        </div>
    )
}

export const ImagePreview: FC<{src?: string}> = ({src}) => {
    const wrapperClassList=  ['input-another-wrapper', 'with-margin-top']
    return (
        <div className={wrapperClassList.join(' ')}>
            {src && <img src={src} alt="" /> }
            {!src && <div className='dummy-img' />}
        </div>
    )
}

type MyDragEvent = DragEvent<any>

export const OverlayWhenDragging: FC<{
    handleDragOver: (e: MyDragEvent) => void,
    // handleDragLeave: (e: MyDragEvent) => void,
    visible: boolean,
    getRootProps?: any
}> = ({
    handleDragOver,
    // handleDragLeave,
    visible,
    getRootProps
}) => {
    window.addEventListener('dragover', (e: any) => {
        handleDragOver(e)
    })
    // window.addEventListener('dragleave', (e: any) => {
    //     handleDragLeave(e)
    // })
    if(!getRootProps) {
        return (
            <div className='overlay-when-dragging' style={{display: visible? 'flex': 'none'}} >
                <h1 style={{color: '#fff'}}><ImageRounded />Drag here...</h1>
            </div>
        )
    } else {
        return (
            <div className='overlay-when-dragging' style={{display: visible? 'flex': 'none'}} {...getRootProps()} >
                <h1 style={{color: '#fff'}}><ImageRounded />Drag here...</h1>
            </div>
        )
    }
}

// input::radio

// input::checkbox

// and other
