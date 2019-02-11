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
import { ServiciosComponent } from './components/home/servicios/servicios.component';
import { NuevosClientesComponent } from './components/home/nuevos-clientes/nuevos-clientes.component';
import { FidelizarClientesComponent } from './components/home/fidelizar-clientes/fidelizar-clientes.component';
import { GridClientesComponent } from './components/home/grid-clientes/grid-clientes.component';
import { GridBlogComponent } from './components/home/grid-blog/grid-blog.component';

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
    ServiciosComponent,
    NuevosClientesComponent,
    FidelizarClientesComponent,
    GridClientesComponent,
    GridBlogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
