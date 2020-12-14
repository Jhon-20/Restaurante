import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  @ViewChild('itemForm')itemForm:ElementRef; 
items: string[] = [];


  constructor() { }

  ngOnInit(): void {
  }
  agregar(item:string){
    this.items.unshift(item)

    this.itemForm.nativeElement.value = '';
    }
      guardar(forma: any){
        console.log(forma)
    }

  
}
