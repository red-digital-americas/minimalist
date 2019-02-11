import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { PagesComponent } from './components/pages/pages.component';
import { FooterComponent } from './components/footer/footer.component';
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

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PagesComponent,
    FooterComponent,
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
    TaylorMadeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
