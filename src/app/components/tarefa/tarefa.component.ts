import { TarefaService } from './../../services/tarefa.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tarefa',
  templateUrl: './tarefa.component.html',
  styleUrls: ['./tarefa.component.css']
})
export class TarefaComponent implements OnInit {
  listaDeTarefas: any;

  constructor(private tarefaService: TarefaService) {}

  adicionar(event: any) {
    let tarefa = {
      id: Math.floor(Math.random() * 100),
      tarefa: event
    };
    this.listaDeTarefas.push(tarefa);
  }

  deletar(event: any) {
    this.listaDeTarefas = this.listaDeTarefas.filter(item => {
      return item.id !== event;
    });
  }

  ngOnInit() {
    this.listaDeTarefas = this.tarefaService.lista();
  }
}
