import { DatePipe } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import Swal from "sweetalert2";
import { ClienteService } from "../../shared/service/cliente.service";

@Component({
  selector: "app-crear-cliente",
  templateUrl: "./crear-cliente.component.html",
  styleUrls: ["./crear-cliente.component.css"],
})
export class CrearClienteComponent implements OnInit {
  clienteForm: FormGroup;
  typesClient = [
    { label: "Antiguo", value: "10"},
    { label: "Nuevo", value: "11" },
  ];

  constructor(
    protected compraService: ClienteService,
    private datePipe: DatePipe,
    private router: Router
  ) {
    this.clienteForm = new FormGroup({});
  }

  ngOnInit(): void {
    this.construirFormularioCliente();
  }

  public crear() {
    const date = this.datePipe.transform(new Date(), "yyyy-MM-dd HH:mm:ss");
    this.clienteForm.value.fechaCreacion = date;
    console.log(this.clienteForm.value);
    this.compraService.guardar(this.clienteForm.value).subscribe(
      (res) => {
        console.log(res);
        Swal.fire("Cliente agregado");
        this.redireccionarVistaCliente();
      },
      (error) => {
        console.error(error);
        console.error("Fallo peticion");
      }
    );
  }

  private construirFormularioCliente() {
    this.clienteForm = new FormGroup({
      nombreCliente: new FormControl("", [Validators.required]),
      tipoCliente: new FormControl("", [Validators.required]),
      fechaCreacion: new FormControl(""),
    });
  }

  alertClienteAgregado() {
    if (this.clienteForm.invalid) {
      return;
    }
    this.crear();
  }

  private redireccionarVistaCliente() {
    this.router.navigateByUrl('cliente/listar')
  }

}
