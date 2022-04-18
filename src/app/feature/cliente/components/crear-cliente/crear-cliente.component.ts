import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ClienteService } from '../../shared/service/cliente.service';

@Component({
  selector: 'app-crear-cliente',
  templateUrl: './crear-cliente.component.html',
  styleUrls: ['./crear-cliente.component.css']
})
export class CrearClienteComponent implements OnInit {
  clienteForm: FormGroup;

  constructor(
    protected compraService: ClienteService,
    private datePipe: DatePipe
  ) { }

  ngOnInit(): void {
    this.construirFormularioCliente();
  }

  crear() {
    const date = this.datePipe.transform(new Date(), "yyyy-MM-dd HH:mm:ss");
    this.clienteForm.value.fechaCreacion = date;
    console.log(this.clienteForm.value);
    this.compraService.guardar(this.clienteForm.value).subscribe(res => {
        console.log(res);
    });

  }

  private construirFormularioCliente() {
    this.clienteForm = new FormGroup({
      nombreCliente: new FormControl("", [Validators.required]),
      tipoCliente: new FormControl("", [Validators.required]),
      fechaCreacion: new FormControl(""),
    });
  }

}
