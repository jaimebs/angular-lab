import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogTarefaItemComponent } from '../dialog-tarefa-item/dialog-tarefa-item.component';

@Component({
  selector: 'app-tarefa-item',
  templateUrl: './tarefa-item.component.html',
  styleUrls: ['./tarefa-item.component.css']
})
export class TarefaItemComponent implements OnInit {
  constructor(public dialog: MatDialog) {}

  @Input() tarefa: any;
  @Input() index: any;
  @Output() deletarItem = new EventEmitter();
  @Output() editarItem = new EventEmitter();

  deletar(id: number) {
    this.deletarItem.emit(id);
  }

  editar(tarefa) {
    let dialogRef = this.dialog.open(DialogTarefaItemComponent, {
      height: '300px',
      width: '500px',
      data: Object.assign({}, tarefa)
    });

    dialogRef.afterClosed().subscribe(result => {
      this.editarItem.emit({ tarefa: result, index: this.index });
    });
  }

  ngOnInit() {}
}
