import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { ClienteRoutingModule } from './cliente-routing.module';
import { BorrarClienteComponent } from './components/borrar-cliente/borrar-cliente.component';
import { CrearClienteComponent } from './components/crear-cliente/crear-cliente.component';
import { ClienteComponent } from './components/cliente/cliente.component';
import { ListarClienteComponent } from './components/listar-cliente/listar-cliente.component';
import { ClienteService } from './shared/service/cliente.service';
import { SharedModule } from '@shared/shared.module';


@NgModule({
  declarations: [
    BorrarClienteComponent,
    CrearClienteComponent,
    ClienteComponent,
    ListarClienteComponent
  ],
  imports: [
    CommonModule,
    ClienteRoutingModule,
    SharedModule
  ],
    providers:[
     ClienteService,
      DatePipe
    ]
})
export class ClienteModule { }
