import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PrincipalComponent } from './component/principal/principal.component';
import{ AboutComponent} from './component/about/about.component';
import{ PortafolioComponent } from './component/portafolio/portafolio.component';
import {ClienteComponent} from './component/cliente/cliente.component';

const routes: Routes = [
  { path: '**', component: ClienteComponent ,
    children:[    
      { path: 'Inicio', component: PrincipalComponent },
      { path: 'About', component: AboutComponent },
      { path: 'Skills', component: AboutComponent },
      { path: 'Proyectos', component: PortafolioComponent }
    ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
