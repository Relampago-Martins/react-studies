import { ITarefa } from '../../../types/tarefa';
import style from './Item.module.scss';


interface ItemProps extends ITarefa{
    selecionaTarefa: (tarefa: ITarefa) => void
}

export default function Item( props : ItemProps){
    const selectClass = props.selecionado ? style.itemSelecionado : '';
    const completeClass = props.completado ? style.itemCompletado : '';

    return (
        <li className={`${style.item} ${selectClass} ${completeClass}`} 
            onClick={() => !props.completado && props.selecionaTarefa({
                ...props as ITarefa,
            })}>
            <h3>{props.tarefa}</h3>
            <span>Tempo: {props.tempo}</span>
            {props.completado && 
                <span className={style.concluido} aria-label='tarefa completada'></span>}
        </li>
    )
}