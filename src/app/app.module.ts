import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AlertModule } from 'ngx-bootstrap';
import { HttpClientModule } from '@angular/common/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatDialogModule,
  MatCheckboxModule,
  MatTooltipModule,
  MatTableModule,
  MatFormFieldModule,
  MatInputModule,
  MatButtonModule
} from '@angular/material';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { TarefaComponent } from './components/tarefa/tarefa.component';
import { AppRoutingModule } from './app-routing.module';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { FooterComponent } from './components/footer/footer.component';
import { TarefaItemComponent } from './components/tarefa-item/tarefa-item.component';
import { TarefaItemAddComponent } from './components/tarefa-item-add/tarefa-item-add.component';
import { DialogTarefaItemComponent } from './components/dialog-tarefa-item/dialog-tarefa-item.component';
import { ContatoComponent } from './components/contato/contato.component';
import { ContatoFormComponent } from './components/contato-form/contato-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TarefaComponent,
    NavBarComponent,
    FooterComponent,
    TarefaItemComponent,
    TarefaItemAddComponent,
    DialogTarefaItemComponent,
    ContatoComponent,
    ContatoFormComponent
  ],
  imports: [
    BrowserModule,
    AlertModule.forRoot(),
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatCheckboxModule,
    MatTooltipModule,
    HttpClientModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ],
  entryComponents: [DialogTarefaItemComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
