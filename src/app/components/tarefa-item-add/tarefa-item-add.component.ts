import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-tarefa-item-add',
  templateUrl: './tarefa-item-add.component.html',
  styleUrls: ['./tarefa-item-add.component.css']
})
export class TarefaItemAddComponent implements OnInit {
  @Output() adicionarItem = new EventEmitter();
  descricao: string = '';

  constructor() {}

  adicionar(item) {
    this.adicionarItem.emit(item);
    this.descricao = '';
  }

  ngOnInit() {}
}
