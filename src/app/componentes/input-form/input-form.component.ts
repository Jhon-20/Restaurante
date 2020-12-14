import { Component, ElementRef, EventEmitter, OnInit,Input, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-input-form',
  templateUrl: './input-form.component.html',
  styleUrls: ['./input-form.component.css']
})
export class InputFormComponent implements OnInit {
  @Output() value = new EventEmitter();
  @ViewChild('itemForm')itemForm:ElementRef; 
  @ViewChild('itemForm2')itemForm2:ElementRef; 
  restaurante:string='';
  ciudad:string='';
  items: string[] = [];
  datos:string;
  validacion:boolean;
  constructor() { }

  ngOnInit(): void {
  }
  agregar(item:string){
    if(this.restaurante  && this.ciudad){
      this.value.emit(this.restaurante);  
      this.value.emit(this.ciudad);  
      this.restaurante = '';
      this.ciudad ='';
    }
      else{
         
    }
 } 
 agregarClick(item:string){
  if(this.restaurante  && this.ciudad){
    this.value.emit(this.ciudad);  
    this.value.emit(this.restaurante);  

    this.restaurante = '';
    this.ciudad = '';
  }
    else{
        alert('Llena todos los campos')
  }
} 


}
