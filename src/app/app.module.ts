import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AlertModule } from 'ngx-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule, MatCheckboxModule, MatTooltipModule } from '@angular/material';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { TarefaComponent } from './components/tarefa/tarefa.component';
import { AppRoutingModule } from './app-routing.module';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { FooterComponent } from './components/footer/footer.component';
import { TarefaItemComponent } from './components/tarefa-item/tarefa-item.component';
import { TarefaItemAddComponent } from './components/tarefa-item-add/tarefa-item-add.component';
import { DialogTarefaItemComponent } from './components/dialog-tarefa-item/dialog-tarefa-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TarefaComponent,
    NavBarComponent,
    FooterComponent,
    TarefaItemComponent,
    TarefaItemAddComponent,
    DialogTarefaItemComponent
  ],
  imports: [
    BrowserModule,
    AlertModule.forRoot(),
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatCheckboxModule,
    MatTooltipModule
  ],
  entryComponents: [DialogTarefaItemComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
