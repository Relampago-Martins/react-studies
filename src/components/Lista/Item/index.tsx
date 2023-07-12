import style from './Item.module.scss';

type Props = {
    tarefa: String;
    tempo: String;
};

export default function Item({ tarefa, tempo }: Props){
    return (
        <li className={style.item}>
            <h3>{tarefa}</h3>
            <span>Tempo: {tempo}</span>
        </li>
    )
}