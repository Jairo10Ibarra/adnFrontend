import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from '@cliente/shared/model/cliente';
import { ClienteService } from '@cliente/shared/service/cliente.service';

@Component({
  selector: 'app-listar-cliente',
  templateUrl: './listar-cliente.component.html',
  styleUrls: ['./listar-cliente.component.css']
})
export class ListarClienteComponent implements OnInit {
  public listaClientes: Observable<Cliente[]>;

  constructor(protected clienteService: ClienteService) { }

  ngOnInit(): void {
    this.listaClientes =  this.clienteService.consultar();
  }

}
