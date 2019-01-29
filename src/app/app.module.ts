import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AlertModule } from 'ngx-bootstrap';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { TarefaComponent } from './components/tarefa/tarefa.component';
import { AppRoutingModule } from './app-routing.module';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { FooterComponent } from './components/footer/footer.component';
import { TarefaItemComponent } from './components/tarefa-item/tarefa-item.component';
import { FormsModule } from '@angular/forms';
import { TarefaItemAddComponent } from './components/tarefa-item-add/tarefa-item-add.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, TarefaComponent, NavBarComponent, FooterComponent, TarefaItemComponent, TarefaItemAddComponent],
  imports: [BrowserModule, AlertModule.forRoot(), AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
