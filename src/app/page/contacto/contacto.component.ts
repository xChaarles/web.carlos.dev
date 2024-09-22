import { Clipboard } from '@angular/cdk/clipboard';
import { Component } from '@angular/core';

@Component({
  standalone: true,
  imports: [],
  templateUrl: './contacto.component.html',
  styles: ``
})
export default class ContactoComponent {

  constructor(private clipboard: Clipboard) {}

  copiar() {
    this.clipboard.copy('carlosbp2608@gmail.com');
  }

}
