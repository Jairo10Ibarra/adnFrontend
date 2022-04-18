import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { ListarCompraComponent } from './components/listar-compra/listar-compra.component';
import { BorrarCompraComponent } from './components/borrar-compra/borrar-compra.component';
import { CrearCompraComponent } from './components/crear-compra/crear-compra.component';
import { CompraComponent } from './components/compra/compra.component';
import { CompraRoutingModule } from './compra-routing.module';
import { CompraService } from './shared/service/compra.service';
import { SharedModule } from '@shared/shared.module';



@NgModule({
  declarations: [
    ListarCompraComponent,
    BorrarCompraComponent,
    CrearCompraComponent,
    CompraComponent
  ],
  imports: [
    CommonModule,
    CompraRoutingModule,
    SharedModule
  
  ],
  providers:[
    CompraService,
    DatePipe
  ]
})
export class CompraModule { }
