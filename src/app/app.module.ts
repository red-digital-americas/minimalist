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
    DataMailingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
