import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClienteComponent } from './components/cliente/cliente.component';
import { CrearClienteComponent } from './components/crear-cliente/crear-cliente.component';
import { ListarClienteComponent } from './components/listar-cliente/listar-cliente.component';

const routes: Routes = [
  {
    path: '',
    component: ClienteComponent,
    children: [
      {
        path: 'listar',
        component: ListarClienteComponent,
      },
      {
        path: 'crear',
        component: CrearClienteComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClienteRoutingModule {}
