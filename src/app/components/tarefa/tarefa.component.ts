import { TarefaService } from './../../services/tarefa.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tarefa',
  templateUrl: './tarefa.component.html',
  styleUrls: ['./tarefa.component.css']
})
export class TarefaComponent implements OnInit {
  listaDeTarefas: any[] = [];

  constructor(private tarefaService: TarefaService) {}

  adicionar(event: any) {
    let tarefa = {
      descricao: event,
      feito: false
    };
    this.tarefaService.salvar(tarefa).subscribe(() => {
      this.getLista();
    });
  }

  deletar(event: any) {
    this.tarefaService.deletar(event).subscribe(() => {
      this.getLista();
    });
  }

  editar(event: any) {
    this.tarefaService.editar(event.tarefa).subscribe(() => {
      this.getLista();
    });
  }

  getLista() {
    this.tarefaService.lista().subscribe(dado => {
      this.listaDeTarefas = dado;
    });
  }

  ngOnInit() {
    this.getLista();
  }
}
