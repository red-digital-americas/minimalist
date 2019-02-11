import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { PagesComponent } from './components/pages/pages.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { MenuComponent } from './components/header/menu/menu.component';
import { MainTitleComponent } from './components/home/main-title/main-title.component';
import { CarouselComponent } from './components/home/carousel/carousel.component';

import { NuevosClientesComponent } from './components/home/nuevos-clientes/nuevos-clientes.component';
import { FidelizarClientesComponent } from './components/home/fidelizar-clientes/fidelizar-clientes.component';
import { GridClientesComponent } from './components/home/grid-clientes/grid-clientes.component';
import { GridBlogComponent } from './components/home/grid-blog/grid-blog.component';
import { ServiciosComponent } from './components/pages/servicios/servicios.component';
import { PublicidadDigitalComponent } from './components/pages/servicios/publicidad-digital/publicidad-digital.component';
import { DesarrolloComponent } from './components/pages/servicios/desarrollo/desarrollo.component';
import { SocialMediaComponent } from './components/pages/servicios/social-media/social-media.component';
import { DataMailingComponent } from './components/pages/servicios/data-mailing/data-mailing.component';
import { CasosDeExitoComponent } from './components/pages/casos-de-exito/casos-de-exito.component';
import { BlogComponent } from './components/pages/blog/blog.component';
import { EquipoComponent } from './components/pages/equipo/equipo.component';
import { AboutUsComponent } from './components/pages/about-us/about-us.component';
import { CertificacionesComponent } from './components/pages/certificaciones/certificaciones.component';
import { ContactoComponent } from './components/pages/contacto/contacto.component';
import { TaylorMadeComponent } from './components/pages/casos-de-exito/taylor-made/taylor-made.component';
import { GridServiciosComponent } from './components/home/grid-servicios/grid-servicios.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PagesComponent,
    FooterComponent,
    HeaderComponent,
    MenuComponent,
    MainTitleComponent,
    CarouselComponent,

    NuevosClientesComponent,
    FidelizarClientesComponent,
    GridClientesComponent,
    GridBlogComponent,
    ServiciosComponent,
    PublicidadDigitalComponent,
    DesarrolloComponent,
    SocialMediaComponent,
    DataMailingComponent,
    CasosDeExitoComponent,
    BlogComponent,
    EquipoComponent,
    AboutUsComponent,
    CertificacionesComponent,
    ContactoComponent,
    TaylorMadeComponent,
    GridServiciosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
