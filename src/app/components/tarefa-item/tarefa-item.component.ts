import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-tarefa-item',
  templateUrl: './tarefa-item.component.html',
  styleUrls: ['./tarefa-item.component.css']
})
export class TarefaItemComponent implements OnInit {
  constructor() {}

  @Input() tarefa: any;
  @Output() deletarItem = new EventEmitter();

  deletar(id: number) {
    this.deletarItem.emit(id);
  }

  ngOnInit() {}
}
