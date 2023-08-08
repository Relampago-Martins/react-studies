import { useEffect, useState } from 'react';
import { tempoParaSegundos } from '../../common/utils/time';
import { ITarefa } from "../../types/tarefa";
import Botao from "../Botao";
import style from './Cronometro.module.scss';
import Relogio from "./Relogio";

interface CronometroProps {
    tarefa: ITarefa | undefined
    completaTarefa: () => void;
}

export default function Cronometro({ tarefa, completaTarefa }: CronometroProps){
    const [tempo, setTempo] = useState<number>();

    useEffect(() => {
        if(tarefa?.tempo){
            setTempo(tempoParaSegundos(tarefa.tempo));
        }
    }, [tarefa]);


    function contagemRegressiva(contador: number = 0){
        setTimeout(() => {
            if (contador > 0){
                setTempo(contador - 1);
                return contagemRegressiva(contador - 1);
            }
            completaTarefa();

        }, 1000);
    }

    return (
        <div className={style.cronometro}>
            <p className={style.titulo}>
                Escolha um card e inicie o cronômetro
            </p>
            <div className={style.relogioWrapper}>
                <Relogio tempo={tempo}/>
            </div>
            <Botao onClick={() => contagemRegressiva(tempo)}>
                Começar!
            </Botao>
        </div>
    )
}