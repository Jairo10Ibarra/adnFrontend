import { Component, OnInit } from "@angular/core";
import { Compra } from "@compra/shared/model/compra";
import { CompraService } from "@compra/shared/service/compra.service";
import { Observable } from "rxjs";


@Component({
  selector: "app-borrar-compra",
  templateUrl: "./borrar-compra.component.html",
  styleUrls: ["./borrar-compra.component.css"],
})
export class BorrarCompraComponent implements OnInit {
  public listaCompras: Observable<Compra[]>;

  constructor(protected compraService: CompraService) {}

  ngOnInit(): void {
    this.listarCompras();
  }

  public borrarCompra(idCompra: number) {
    this.compraService.eliminar(idCompra).subscribe((response) => {
      this.listarCompras();
      console.log(response);
    });
    console.log(idCompra);
  }

  public listarCompras() {
    this.listaCompras = this.compraService.consultar();
  }
}
