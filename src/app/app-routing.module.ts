import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NoticiasComponent } from './noticias/noticias.component';
import { PrivatePageComponent } from './private-page/private-page.component';
import { RolesMantenimientoComponent } from './mantenimientos/roles-mantenimiento/roles-mantenimiento.component';
import { AuthGuard } from './guards/auth.guard';
import { NoticiasMantenimientoComponent } from './mantenimientos/noticias-mantenimiento/noticias-mantenimiento.component';
import { UsuariosMantenimientoComponent } from './mantenimientos/usuarios-mantenimiento/usuarios-mantenimiento.component';
import { AgregarEditarRolComponent } from './crear-actualizar/agregar-editar-rol/agregar-editar-rol.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { GenerarCodigoComponent } from './generar-codigo/generar-codigo.component';
import { AgregarEditarNoticiaComponent } from './crear-actualizar/agregar-editar-noticia/agregar-editar-noticia.component';
import { AgregarEditarUsuarioComponent } from './crear-actualizar/agregar-editar-usuario/agregar-editar-usuario.component';
import { ManejoCitasComponent } from './manejo-citas/manejo-citas.component';
import {AgregarCitaComponent} from './crear-actualizar/agregar-cita/agregar-cita.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', 
    pathMatch: 'full'
  },
  {path: 'home',
    component: HomeComponent
  },
  {path: 'noticias',
    component: NoticiasComponent
  },
  {path: 'privado', component: PrivatePageComponent},

  {path: 'mantenimientoRoles',
    component: RolesMantenimientoComponent,
    canActivate: [AuthGuard]
  },
  {path: 'mantenimientoNoticias',
    component: NoticiasMantenimientoComponent,
    canActivate: [AuthGuard]
  },
  {path: 'mantenimientoUsuarios', 
    component: UsuariosMantenimientoComponent,
    canActivate: [AuthGuard]
  },
  {path: 'rol', 
    component: AgregarEditarRolComponent,
    canActivate: [AuthGuard]
  },
  {path: 'usuario', 
    component: AgregarEditarUsuarioComponent,
    canActivate: [AuthGuard]
  },
  {path: 'noticia', 
    component: AgregarEditarNoticiaComponent,
    canActivate: [AuthGuard]
  },
  {path: 'generarCodigo', 
    component: GenerarCodigoComponent,
    canActivate: [AuthGuard]
  },
  {path: 'citas',
  component: ManejoCitasComponent,
  canActivate: [AuthGuard]
},
{path: 'agregarCita',
  component: AgregarCitaComponent ,
  canActivate: [AuthGuard]
},

  {path: '**', 
    component: PageNotFoundComponent
  }
  ];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ],

  declarations: []
})

export class AppRoutingModule { }
