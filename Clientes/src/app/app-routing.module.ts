import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdicionarComponent } from './Componentes/adicionar/adicionar.component';
import { ListaComponent } from './Componentes/lista/lista.component';
import { VistacardComponent } from './Componentes/vistacard/vistacard.component';

const routes: Routes = [
  {path:"", component:VistacardComponent},
  {path:"adicionar", component:AdicionarComponent},
  {path:"lista", component:ListaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
