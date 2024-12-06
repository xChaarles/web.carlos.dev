import { animate, transition } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  standalone: true,
  imports: [],
  templateUrl: './proyectos.component.html',
  styles: ``
})
export default class ProyectosComponent {

  isOpen: boolean = false;
  isOpen1: boolean = false;
  isOpen2: boolean = false;
  isOpen3: boolean = false;
  isOpen4: boolean = false;

  toggleContent(){
    this.isOpen =!this.isOpen;
  };

  toggleContent1(){
    this.isOpen1 =!this.isOpen1;
  }
  
  toggleContent2(){
    this.isOpen2 =!this.isOpen2;
  }

  toggleContent3(){
    this.isOpen3 =!this.isOpen3;
  }

  toggleContent4(){
    this.isOpen4 =!this.isOpen4;
  }
}
