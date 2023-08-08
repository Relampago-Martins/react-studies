import { useState } from 'react';
import Cronometro from '../components/Cronometro';
import Formulario from '../components/Formulario';
import Lista from '../components/Lista';
import { ITarefa } from '../types/tarefa';
import style from './App.module.scss';

function App() {
  const [tarefas, setTarefas] = useState<ITarefa[]>([]);
  const [tarefaSelecionada, setTarefaSelecionada] = useState<ITarefa>();


  function selecionaTarefa(tarefaParaSelecionar: ITarefa){
    if (!tarefaSelecionada){
      setTarefaSelecionada(tarefaParaSelecionar);
      setTarefas(tarefas.map((tarefa) => ({
        ...tarefa,
        selecionado: tarefa.id === tarefaParaSelecionar.id,
      })));
    }
  }

  function completaTarefa(){
    if (tarefaSelecionada){
      setTarefas(tarefas.map((tarefa) => {
        if (tarefa.id === tarefaSelecionada.id){
          return {
            ...tarefa,
            selecionado: false,
            completado: true,
          };
        }
        return tarefa;
      }));
      setTarefaSelecionada(undefined);
    }
  }

  return (
    <div className={style.AppStyle}>
      <Formulario setTarefas={setTarefas}/>
      <Lista tarefas={tarefas} selecionaTarefa={selecionaTarefa}/>
      <Cronometro tarefa={tarefaSelecionada} completaTarefa={completaTarefa}/>
    </div>
  );
}

export default App;
