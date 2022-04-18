export class Compra {
  idCompra: number;
  precio: number;
  idCliente: number;
  fechaCompra: Date;

  constructor(
    idCompra: number,
    precio: number,
    idCliente: number,
    fechaCompra: Date
  ) {
        this.idCompra=idCompra;
        this.precio=precio;
        this.idCliente=idCliente;
        this.fechaCompra=fechaCompra;
  }
}
