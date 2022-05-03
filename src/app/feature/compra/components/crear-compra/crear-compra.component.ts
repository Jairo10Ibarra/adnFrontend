import { DatePipe } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { CompraService } from "@compra/shared/service/compra.service";
import Swal from "sweetalert2";

@Component({
  selector: "app-crear-compra",
  templateUrl: "./crear-compra.component.html",
  styleUrls: ["./crear-compra.component.css"],
})
export class CrearCompraComponent implements OnInit {
  compraForm: FormGroup;

  constructor(
    protected compraService: CompraService,
    private datePipe: DatePipe,
    private router: Router
  ) {
    this.compraForm = new FormGroup({});
  }

  ngOnInit(): void {
    this.construirFormularioCompra();
  }

  public crear() {
    const date = this.datePipe.transform(new Date(), "yyyy-MM-dd");
    this.compraForm.value.fechaCompra = date;
    console.log(this.compraForm.value);
    this.compraService.guardar(this.compraForm.value).subscribe(
      (res) => {
        console.log(res);
        Swal.fire("Compra agregada");
        this.redireccionarVistaCompra();
      },
      (error) => {
        console.log(error); //control de errores
      }
    );
  }

  private construirFormularioCompra() {
    this.compraForm = new FormGroup({
      precio: new FormControl("", [Validators.required]),
      idCliente: new FormControl("", [Validators.required]),
      fechaCompra: new FormControl(""),
    });
  }

  alertCompraAgregada() {
    if (this.compraForm.invalid) {
      return;
    }
    this.crear();
  }

  private redireccionarVistaCompra() {
    this.router.navigateByUrl('compra/listar')
  }
}
