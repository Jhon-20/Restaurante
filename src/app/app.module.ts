import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';
import { FormularioComponent } from './componentes/formulario/formulario.component';
import { ListaBodyComponent } from './componentes/lista-body/lista-body.component';
import { InputFormComponent } from './componentes/input-form/input-form.component';



@NgModule({
  declarations: [
    AppComponent,
    FormularioComponent,
    ListaBodyComponent,
    InputFormComponent
  

  
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
