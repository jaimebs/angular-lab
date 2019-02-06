import { MensagemService } from './../../services/mensagem.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogTarefaItemComponent } from '../dialog-tarefa-item/dialog-tarefa-item.component';

@Component({
  selector: 'app-tarefa-item',
  templateUrl: './tarefa-item.component.html',
  styleUrls: ['./tarefa-item.component.css']
})
export class TarefaItemComponent implements OnInit {
  constructor(public dialog: MatDialog, private msg: MensagemService) {}

  @Input() tarefa: any;
  @Input() index: any;
  @Output() deletarItem = new EventEmitter();
  @Output() editarItem = new EventEmitter();
  @Output() selecionarItem = new EventEmitter();

  deletar(id: number) {
    this.msg.confirmacao('Alerta', 'Tem certeza que quer excluir?', 'warning', () => {
      this.deletarItem.emit(id);
    });
  }

  editar(tarefa) {
    let dialogRef = this.dialog.open(DialogTarefaItemComponent, {
      height: '300px',
      width: '500px',
      data: { ...tarefa } //Object.assign({}, tarefa)
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) this.editarItem.emit({ tarefa: result, index: this.index });
      if (result) this.msg.mensagem('Tarefa editada!', 'warning');
    });
  }

  changeItem(tarefa) {
    this.selecionarItem.emit({ tarefa });
  }

  ngOnInit() {}
}
