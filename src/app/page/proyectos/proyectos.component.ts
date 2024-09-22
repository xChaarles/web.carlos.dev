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

  toggleContent(){
    this.isOpen =!this.isOpen;
  };

  toggleContent1(){
    this.isOpen1 =!this.isOpen1;
  }
}
