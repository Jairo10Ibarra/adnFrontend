import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



const routes: Routes = [
  { path: '', redirectTo: '/cliente/listar', pathMatch: 'full' },
  { path: 'compra', loadChildren: () => import('@compra/compra.module').then(mod => mod.CompraModule) },
  { path: 'cliente', loadChildren: () => import('@cliente/cliente.module').then(mod => mod.ClienteModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
