import React from 'react';
import style from './Botao.module.scss';

interface BotaoProps {
    children?: React.ReactNode,
    onClick?: () => void,
    type?: "button" | "submit" | "reset"
}

export default function Botao({children, type="button", onClick}: BotaoProps){
    return (
        <button className={style.botao} type={type} onClick={onClick}>
            {children}
        </button>
    )
}
