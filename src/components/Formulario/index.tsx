import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { ITarefa } from '../../types/tarefa';
import Botao from '../Botao';
import style from './Formulario.module.scss';


interface FormularioProps {
    setTarefas: React.Dispatch< React.SetStateAction< ITarefa[] > >
}

export default function Formulario({setTarefas}: FormularioProps){
    const [tarefa, setTarefa] = useState('');
    const [tempo, setTempo] = useState('00:00');

    function addTarefa(evento: React.FormEvent<HTMLFormElement>){
        evento.preventDefault();
        setTarefas(tarefas => tarefas.concat({
            tarefa, tempo, id: uuidv4(),
            selecionado: false, completado: false,
        }));
        setTarefa('');
        setTempo('00:00');
    }

    return (
        <form className={style.novaTarefa} onSubmit={addTarefa}>
            <div className={style["inputContainer"]}>
                <label htmlFor="tarefa">
                    Adicione um novo estudo
                </label>
                <input 
                type="text" name="tarefa" id="tarefa"
                value={tarefa}
                onChange={evento => setTarefa(evento.target.value)}
                placeholder="O que você quer Estudar?"/>
            </div>

            <div className={style.inputContainer}>
                <label htmlFor="tempo">
                    Tempo
                </label>
                <input
                type="time" step="1" name="tempo" id="tempo"
                value={tempo} 
                onChange={evento => setTempo(evento.target.value)}
                min="00:00:00" max="1:30:00"/>
            </div>
            <Botao type={'submit'}>Adicionar</Botao>
        </form>
    )
}
