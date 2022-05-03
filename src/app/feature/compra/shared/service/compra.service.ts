import { Injectable } from '@angular/core';
import { HttpService } from '@core/services/http.service';
import { environment } from 'src/environments/environment';
import { Compra } from '../model/compra';

@Injectable()
export class CompraService {
  
  constructor(protected http: HttpService) {}

  public consultar() {
    return this.http.doGet<Compra[]>(
      `${environment.endpoint}/compra`,
      this.http.optsName('consultar compras')
    );
  }

  public guardar(compra: Compra) {
    return this.http.doPost<Compra, any>(
      `${environment.endpoint}/compra`,
      compra,
      this.http.optsName('crear compra')
    );
  }

  public eliminar(idCompra: number) {
    return this.http.doDelete<boolean>(
      `${environment.endpoint}/compra/${idCompra}`,
      this.http.optsName('eliminar compra')
    );
  }
}
