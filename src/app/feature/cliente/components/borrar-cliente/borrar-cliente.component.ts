import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from '../../shared/model/cliente';
import { ClienteService } from '../../shared/service/cliente.service';

@Component({
  selector: 'app-borrar-cliente',
  templateUrl: './borrar-cliente.component.html',
  styleUrls: ['./borrar-cliente.component.css']
})
export class BorrarClienteComponent implements OnInit {
  public listaClientes: Observable<Cliente[]>;

  constructor(protected clienteService: ClienteService) { }

  ngOnInit(): void {
    this.listaClientes = this.clienteService.consultar();
  }

  public borrarCliente(idCliente: number){
    this.clienteService.eliminar(idCliente).subscribe(response => {
      this.listarClientes();
      console.log(response);
    });
    console.log(idCliente);
  }

  public listarClientes() {
    this.listaClientes = this.clienteService.consultar();
  }




}
