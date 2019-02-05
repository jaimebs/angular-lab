import { ContatoService } from './../../services/contato.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-contato-form',
  templateUrl: './contato-form.component.html',
  styleUrls: ['./contato-form.component.css']
})
export class ContatoFormComponent implements OnInit {
  constructor(private route: ActivatedRoute, private contatoService: ContatoService, private location: Location) {}

  id = this.route.snapshot.paramMap.get('id');
  contato = {};

  voltar(): void {
    this.location.back();
  }

  salvar() {
    this.contatoService.salvar(this.contato).subscribe(() => {
      this.voltar();
    });
  }

  ngOnInit() {
    if (this.id !== '0') this.contatoService.listarPorId(this.id).subscribe(dado => (this.contato = dado));
  }
}
