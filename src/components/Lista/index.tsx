import React from 'react';
import './style.scss';

function Lista(){
    const tarefas = [
        {tarefa: 'Typescript', tempo: '1:30:00'},
        {tarefa: 'React', tempo: '1:30:00'}
    ]
    return (
        <aside className="listaTarefas">
            <h2>Estudos do dia</h2>
            <ul>
                {tarefas.map((item, index)=> (
                    <li key={index} className="item">
                        <h3>{item.tarefa}</h3>
                        <span>Tempo: {item.tempo}</span>
                    </li>
                ))}
            </ul>
        </aside>
    )
}

export default Lista;