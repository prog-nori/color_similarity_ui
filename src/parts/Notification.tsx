import { FC, ReactNode } from 'react'
import '../assets/common/style/app.scss'
import {
    InfoOutlined,
    CheckOutlined,
    WarningAmberOutlined,
    ErrorOutlineOutlined
} from '@mui/icons-material'

type NotificationProps = {
    children: ReactNode
    isShow?: boolean
    type: 'info'|'success'|'warn'|'err'
}

const icon = {
    'info': <InfoOutlined />,
    'success': <CheckOutlined />,
    'warn': <WarningAmberOutlined />,
    'err': <ErrorOutlineOutlined />
}

export const Notification: FC<NotificationProps> = ({children, isShow, type}) => {
    /**
     * Todo: 閉じるボタンを用意するか、通知語数秒で消える機能を追加する
     */
    const classes = ['message', `message-${type}`, isShow? 'message-visible': 'message-hide']
    return (
        <div className={classes.join(' ')}>
            <span>
                <span className='icon'>{icon[type]}</span>
                {children}
            </span>
        </div>
    )
}