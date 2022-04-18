import { Injectable } from '@angular/core';
import { HttpService } from '@core/services/http.service';
import { environment } from 'src/environments/environment';
import { Cliente } from '../model/cliente';

@Injectable()
export class ClienteService {

  constructor(protected http: HttpService) {}

  public consultar() {
    return this.http.doGet<Cliente[]>(
      `${environment.endpoint}/cliente`,
      this.http.optsName("consultar clientes")
    );
  }

  public guardar(cliente: Cliente) {
    return this.http.doPost<Cliente, any>(
      `${environment.endpoint}/cliente`,
      cliente,
      this.http.optsName("crear cliente")
    );
  }

  public eliminar(idCliente: number) {
    return this.http.doDelete<boolean>(
      `${environment.endpoint}/cliente/${idCliente}`,
      this.http.optsName("eliminar cliente")
    );
  }

}
