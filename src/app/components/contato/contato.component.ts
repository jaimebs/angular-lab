import { ContatoService } from './../../services/contato.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatSort } from '@angular/material';
import { MensagemService } from 'src/app/services/mensagem.service';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})
export class ContatoComponent implements OnInit {
  constructor(private contatoService: ContatoService, private msg: MensagemService) {}

  contatos: any[] = [];
  @ViewChild(MatSort) sort: MatSort;
  displayedColumns: string[] = ['id', 'nome', 'telefone', 'editar', 'excluir'];
  dataSource = new MatTableDataSource();

  getListaContatos() {
    this.contatoService.lista().subscribe(dado => (this.dataSource.data = dado));
  }

  deletar(id) {
    this.msg.confirmacao('Alerta', 'Tem certeza que quer excluir?', 'warning', () => {
      this.contatoService.deletar(id).subscribe(() => {
        this.getListaContatos();
      });
    });
  }

  ngOnInit() {
    this.getListaContatos();
    this.dataSource.sort = this.sort;
  }
}
