export class Cliente {
  idCliente: number;
  nombreCliente: String;
  tipoCliente: number;
  fechaCliente: Date;

  constructor(
    idCliente: number,
    nombreCliente: String,
    tipoCliente: number,
    fechaCLiente: Date
  ) {
    this.idCliente = idCliente;
    this.nombreCliente = nombreCliente;
    this.tipoCliente = tipoCliente;
    this.fechaCliente = fechaCLiente;
  }
}
