import { ChangeEvent, FC, MouseEvent, ReactNode } from 'react'

type FormInputProps = {
    label: string,
    name: string,
    value?: string|number|boolean,
    placeholder?: string,
    onChange?: (e: ChangeEvent<unknown>) => void,
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
    const wrapperClassList=  ['input-button-wrapper']
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
    const wrapperClassList=  ['input-button-wrapper']
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

// input::radio

// input::checkbox

// and other
