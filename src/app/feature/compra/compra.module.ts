import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { CompraRoutingModule } from './compra-routing.module';
import { BorrarCompraComponent } from './components/borrar-compra/borrar-compra.component';
import { CrearCompraComponent } from './components/crear-compra/crear-compra.component';
import { CompraComponent } from './components/compra/compra.component';
import { ListarCompraComponent } from './components/listar-compra/listar-compra.component';
import { CompraService } from './shared/service/compra.service';
import { SharedModule } from '@shared/shared.module';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

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
    SharedModule,
    MatTableModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule
  ],
  providers: [
    CompraService,
    DatePipe
  ]
})
export class CompraModule { }
