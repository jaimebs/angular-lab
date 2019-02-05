import { ContatoComponent } from './components/contato/contato.component';
import { ContatoFormComponent } from './components/contato-form/contato-form.component';
import { TarefaComponent } from './components/tarefa/tarefa.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'tarefa', component: TarefaComponent },
  { path: 'contato', component: ContatoComponent },
  { path: 'contato/:id', component: ContatoFormComponent }
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
