import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Clipboard } from '@angular/cdk/clipboard';

@Component({
  standalone: true,
  imports: [RouterModule],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export default class InicioComponent {


  isOpen: boolean = false;
  isOpen1: boolean = false;

  toggleContent(){
    this.isOpen =!this.isOpen;
  }

  toggleContent1(){
    this.isOpen1 =!this.isOpen1;
  }

  constructor(private clipboard: Clipboard) {}

  copiar() {
    this.clipboard.copy('carlosbp2608@gmail.com');
  }

    
}
