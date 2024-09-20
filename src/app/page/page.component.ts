import { Component } from '@angular/core';
import { MenuComponent } from '../shared/menu/menu.component';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  imports: [MenuComponent, RouterModule],
  templateUrl: './page.component.html',
  styles: ``
})
export default class PageComponent {
}
