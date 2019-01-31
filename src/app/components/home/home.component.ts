import { Component, OnInit } from '@angular/core';
import { TarefaService } from 'src/app/services/tarefa.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  numeroDeTarefas: number = 0;

  constructor(private tarefaService: TarefaService) {}

  ngOnInit() {
    this.tarefaService.lista().subscribe(item => {
      this.numeroDeTarefas = item.length;
    });
  }
}
