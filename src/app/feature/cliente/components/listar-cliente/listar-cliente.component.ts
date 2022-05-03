import { DatePipe } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { Cliente } from "@cliente/shared/model/cliente";
import { ClienteService } from "@cliente/shared/service/cliente.service";
import Swal from "sweetalert2";

@Component({
  selector: "app-listar-cliente",
  templateUrl: "./listar-cliente.component.html",
  styleUrls: ["./listar-cliente.component.css"],
})
export class ListarClienteComponent implements OnInit {
  clienteForm: FormGroup;
  title = "sweetAlert";
  public listaClientes: Cliente[] = [];
  displayedColumns: string[] = [
    "idCliente",
    "nombre",
    "tipoCliente",
    "fechaCliente",
    "borrar",
  ];

  constructor(
    protected clienteService: ClienteService,
    private datePipe: DatePipe) {}

  ngOnInit(): void {
    this.listarClientes();
  }

  public borrarCliente(idCliente: number) {
    this.clienteService.eliminar(idCliente).subscribe((response) => {
      this.borrarClienteArray(idCliente);
      console.log(response);
    });
  }

  public borrarClienteArray(idCliente: number) {
    this.listaClientes = this.listaClientes.filter(
      (cliente) => cliente.idCliente !== idCliente
    );
  }

  public listarClientes() {
  this.clienteService.consultar().subscribe((response) => {
    this.listaClientes = response;
  });
  }

  confirmDelete(idCliente: string) {
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
        this.borrarCliente(Number(idCliente));
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire("Cancelado", "Tu quieres eliminar el registro", "error");
      }
    });
  }

  crear() {
    const date = this.datePipe.transform(new Date(), "yyyy-MM-dd");
    this.clienteForm.value.fechaCliente = date;
    console.log(this.clienteForm.value);
    this.clienteService.guardar(this.clienteForm.value).subscribe((res) => {
      console.log(res);
    });
  }

}
