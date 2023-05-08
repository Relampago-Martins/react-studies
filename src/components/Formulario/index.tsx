import React from 'react';
import Botao from '../Botao';
import style from './Formulario.module.scss';

class Formulario extends React.Component {
    render(){
        return (
            <form className={style.novaTarefa}>
                <div className={style["inputContainer"]}>
                    <label htmlFor="tarefa">
                        Adicione um novo estudo
                    </label>
                    <input 
                    type="text" name="tarefa" id="tarefa"
                    placeholder="O que você quer Estudar?"/>
                </div>
                <div className={style.inputContainer}>
                    <label htmlFor="tempo">
                        Tempo
                    </label>
                    <input
                    type="time" step="1" name="tempo" id="tempo"
                    min="00:00:00" max="1:30:00"/>
                </div>
                <Botao>Adicionar</Botao>
            </form>
        )
    }

}
export default Formulario;