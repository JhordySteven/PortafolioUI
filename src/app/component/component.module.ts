import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MenuComponent } from '../component/menu/menu.component';
import { PrincipalComponent } from '../component/principal/principal.component';
import {NgxTypedJsModule} from 'ngx-typed-js';
import { AboutComponent } from './about/about.component';
import { PortafolioComponent } from './portafolio/portafolio.component';
import { FooterComponent } from './footer/footer.component';
import { ClienteComponent } from './cliente/cliente.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [MenuComponent,PrincipalComponent, AboutComponent, PortafolioComponent, FooterComponent, ClienteComponent, ContactComponent],
  imports: [
    RouterModule,
    CommonModule,
    NgxTypedJsModule
  ],exports:[RouterModule,MenuComponent,PrincipalComponent, AboutComponent, PortafolioComponent,FooterComponent,ClienteComponent,ContactComponent]
})
export class ComponentModule { }
