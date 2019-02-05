import { ContatoService } from './../../services/contato.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatSort } from '@angular/material';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})
export class ContatoComponent implements OnInit {
  constructor(private contatoService: ContatoService) {}

  contatos: any[] = [];
  @ViewChild(MatSort) sort: MatSort;
  displayedColumns: string[] = ['id', 'nome', 'telefone', 'editar'];
  dataSource = new MatTableDataSource();

  getListaContatos() {
    this.contatoService.lista().subscribe(dado => (this.dataSource.data = dado));
  }

  ngOnInit() {
    this.getListaContatos();
    this.dataSource.sort = this.sort;
  }
}
