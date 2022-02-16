import React from 'react';
import './App.css';

const Task = (value) => {
  return (
    <li key={value}>{value}</li> // sempre que usa map no componente o compronente precisa de uma chave unica KEY
  );
}

const tarefas = ['Acordar', 'Tomar café', 'Escovar os dentes', 'Estudar', 'Treinar'];

class App extends React.Component {
  render() {
    return (
      <ul>{ tarefas.map(tarefa => Task(tarefa)) }</ul>
    );
  }
}

export default App;
