import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PagesComponent } from './components/pages/pages.component';
import { ServiciosComponent } from './components/pages/servicios/servicios.component';
import { DataMailingComponent } from './components/pages/servicios/data-mailing/data-mailing.component';
import { DesarrolloComponent } from './components/pages/servicios/desarrollo/desarrollo.component';
import { PublicidadDigitalComponent } from './components/pages/servicios/publicidad-digital/publicidad-digital.component';
import { SocialMediaComponent } from './components/pages/servicios/social-media/social-media.component';
import { AboutUsComponent } from './components/pages/about-us/about-us.component';
import { BlogComponent } from './components/pages/blog/blog.component';
import { CasosDeExitoComponent } from './components/pages/casos-de-exito/casos-de-exito.component';
import { CertificacionesComponent } from './components/pages/certificaciones/certificaciones.component';
import { ContactoComponent } from './components/pages/contacto/contacto.component';
import { EquipoComponent } from './components/pages/equipo/equipo.component';

const routes: Routes = [
  {
     path: '',
     component: HomeComponent
   },

   {
      path: 'servicios',
      component: ServiciosComponent
    },

    {
       path: 'servicios/mailing',
       component: DataMailingComponent
     },

     {
        path: 'servicios/desarrollo',
        component: DesarrolloComponent
      },

      {
         path: 'servicios/publicidad-digital',
         component: PublicidadDigitalComponent
       },

      {
        path: 'servicios/social-media',
        component: SocialMediaComponent
      },

      {
        path: 'about-us',
        component: AboutUsComponent
      },

      {
        path: 'blog',
        component: BlogComponent
      },

      {
        path: 'casos-de-exito',
        component: CasosDeExitoComponent
      },

      {
        path: 'certificaciones',
        component: CertificacionesComponent
      },

      {
        path: 'contacto',
        component: ContactoComponent
      },

      {
        path: 'equipo',
        component: EquipoComponent
      }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
