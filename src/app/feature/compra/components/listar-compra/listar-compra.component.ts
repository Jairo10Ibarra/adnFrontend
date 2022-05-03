import { DatePipe } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { Compra } from "@compra/shared/model/compra";
import { CompraService } from "@compra/shared/service/compra.service";
import Swal from "sweetalert2";

@Component({
  selector: "app-listar-compra",
  templateUrl: "./listar-compra.component.html",
  styleUrls: ["./listar-compra.component.css"],
})
export class ListarCompraComponent implements OnInit {
  compraForm: FormGroup;
  title = "sweetAlert";
  public listaCompras: Compra[] = [];
  displayedColumns: string[] = [
    "idCompra",
    "precio",
    "idCliente",
    "fechaCompra",
    "borrar",
  ];

  constructor(
    protected compraService: CompraService,
    private datePipe: DatePipe
  ) {}

  ngOnInit(): void {
    this.listarCompras();
  }

  public borrarCompra(idCompra: number) {
    this.compraService.eliminar(idCompra).subscribe((response) => {
      this.borrarCompraArray(idCompra);
      console.log(response);
    });
  }

  // Borrar compra del array para refrescar tabla
  public borrarCompraArray(idCompra: number) {
    this.listaCompras = this.listaCompras.filter(
      (compra) => compra.idCompra !== idCompra
    );
  }

  public listarCompras() {
    this.compraService.consultar().subscribe((response) => {
      this.listaCompras = response;
    });
  }

  confirmDelete(id: string) {
    Swal.fire({
      title: "Eliminar",
      text: "Quieres eliminar este registro",
      showCancelButton: true,
      icon: "warning",
      confirmButtonText: "Si, eliminar",
      cancelButtonText: "No, salir",
    }).then((result) => {
      if (result.value) {
        Swal.fire("Elminado", "El registro fue eliminado", "success");
        this.borrarCompra(Number(id));
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire("Cancelado", "Tu quieres eliminar el registro", "error");
      }
    });
  }

  crear() {
    const date = this.datePipe.transform(new Date(), "yyyy-MM-dd");
    this.compraForm.value.fechaCompra = date;
    console.log(this.compraForm.value);
    this.compraService.guardar(this.compraForm.value).subscribe((res) => {
      console.log(res);
    });
  }
}
