import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-tarefa-item',
  templateUrl: './dialog-tarefa-item.component.html',
  styleUrls: ['./dialog-tarefa-item.component.css']
})
export class DialogTarefaItemComponent implements OnInit {
  tarefa: any;
  constructor(public dialogRef: MatDialogRef<DialogTarefaItemComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {}

  onClickEditar() {
    this.dialogRef.close(this.tarefa);
  }

  ngOnInit() {
    this.tarefa = this.data;
  }
}
