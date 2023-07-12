import React from 'react';
import style from './Lista.module.scss';
import Item from './Item';

function Lista(){
    const tarefas = [
        {tarefa: 'Typescript', tempo: '1:30:00'},
        {tarefa: 'React', tempo: '1:30:00'}
    ]
    return (
        <aside className={style.listaTarefas}>
            <h2>Estudos do dia</h2>
            <ul>
                {tarefas.map((item, index)=> (
                    <Item 
                        key={index}
                        {...item}
                    />
                ))}
            </ul>
        </aside>
    )
}

export default Lista;
