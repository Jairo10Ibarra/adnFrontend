import { Component } from '@angular/core';
import { MenuItem } from '@core/modelo/menu-item';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MrFood';
  public companies: MenuItem[] = [
    { url: '/cliente/listar', nombre: 'Cliente' },
    { url: '/compra/listar', nombre: 'Compra' }

  ];


}
