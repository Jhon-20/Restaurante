import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-lista-body',
  templateUrl: './lista-body.component.html',
  styleUrls: ['./lista-body.component.css']
})
export class ListaBodyComponent implements OnInit {
  @ViewChild('nombreInput')nombreInput:ElementRef; 
  @Input() items: string[] = [];
  @Input() items2: string[] = [];
  @Output() salida = new EventEmitter();
  nombre:string;
  ciudad:string;
  datos:string;
  constructor() { }

  ngOnInit(): void {
  }
  eliminar(index: number){
    this.salida.emit(index);
  
  }
  guardarClick(datos:string){
    this.nombre=datos;
    this.ciudad=datos;
    this.nombreInput.nativeElement.value = '';
   }
}
