import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CompraComponent } from "./components/compra/compra.component";
import { CrearCompraComponent } from "./components/crear-compra/crear-compra.component";
import { ListarCompraComponent } from "./components/listar-compra/listar-compra.component";

const routes: Routes = [
  {
    path: "",
    component: CompraComponent,
    children: [
      {
        path: "listar",
        component: ListarCompraComponent,
      },

      {
        path: "crear",
        component: CrearCompraComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CompraRoutingModule {}
