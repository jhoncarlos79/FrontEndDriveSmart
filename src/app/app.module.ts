import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IdentificarComponent } from './modulos/seguridad/identificar/identificar.component';
import { CambioClaveComponent } from './modulos/seguridad/cambio-clave/cambio-clave.component';
import { RecuperarClaveComponent } from './modulos/seguridad/recuperar-clave/recuperar-clave.component';
import { CrearClienteComponent } from './modulos/administracion/cliente/crear-cliente/crear-cliente.component';
import { EditarClienteComponent } from './modulos/administracion/cliente/editar-cliente/editar-cliente.component';
import { EliminarClienteComponent } from './modulos/administracion/cliente/eliminar-cliente/eliminar-cliente.component';
import { BuscarClienteComponent } from './modulos/administracion/cliente/buscar-cliente/buscar-cliente.component';
import { CrearAsesorComponent } from './modulos/administracion/asesor/crear-asesor/crear-asesor.component';
import { EditarAsesorComponent } from './modulos/administracion/asesor/editar-asesor/editar-asesor.component';
import { EliminarAsesorComponent } from './modulos/administracion/asesor/eliminar-asesor/eliminar-asesor.component';
import { BuscarAsesorComponent } from './modulos/administracion/asesor/buscar-asesor/buscar-asesor.component';
import { CrearAdministradorComponent } from './modulos/administracion/administrador/crear-administrador/crear-administrador.component';
import { EditarAdministradorComponent } from './modulos/administracion/administrador/editar-administrador/editar-administrador.component';
import { EliminarAdministradorComponent } from './modulos/administracion/administrador/eliminar-administrador/eliminar-administrador.component';
import { BuscarAdministradorComponent } from './modulos/administracion/administrador/buscar-administrador/buscar-administrador.component';
import { CrearVehiculoComponent } from './modulos/administracion/vehiculo/crear-vehiculo/crear-vehiculo.component';
import { EditarVehiculoComponent } from './modulos/administracion/vehiculo/editar-vehiculo/editar-vehiculo.component';
import { EliminarVehiculoComponent } from './modulos/administracion/vehiculo/eliminar-vehiculo/eliminar-vehiculo.component';
import { BuscarVehiculoComponent } from './modulos/administracion/vehiculo/buscar-vehiculo/buscar-vehiculo.component';
import { CrearTipoVehiculoComponent } from './modulos/administracion/tipo-vehiculo/crear-tipo-vehiculo/crear-tipo-vehiculo.component';
import { EditarTipoVehiculoComponent } from './modulos/administracion/tipo-vehiculo/editar-tipo-vehiculo/editar-tipo-vehiculo.component';
import { EliminarTipoVehiculoComponent } from './modulos/administracion/tipo-vehiculo/eliminar-tipo-vehiculo/eliminar-tipo-vehiculo.component';
import { BuscarTipoVehiculoComponent } from './modulos/administracion/tipo-vehiculo/buscar-tipo-vehiculo/buscar-tipo-vehiculo.component';
import { CrearSolicitudComponent } from './modulos/solicitudes/crear-solicitud/crear-solicitud.component';
import { BuscarSolicitudComponent } from './modulos/solicitudes/buscar-solicitud/buscar-solicitud.component';
import { EditarSolicitudComponent } from './modulos/solicitudes/editar-solicitud/editar-solicitud.component';
import { EliminarSolicitudComponent } from './modulos/solicitudes/eliminar-solicitud/eliminar-solicitud.component';

@NgModule({
  declarations: [
    AppComponent,
    IdentificarComponent,
    CambioClaveComponent,
    RecuperarClaveComponent,
    CrearClienteComponent,
    EditarClienteComponent,
    EliminarClienteComponent,
    BuscarClienteComponent,
    CrearAsesorComponent,
    EditarAsesorComponent,
    EliminarAsesorComponent,
    BuscarAsesorComponent,
    CrearAdministradorComponent,
    EditarAdministradorComponent,
    EliminarAdministradorComponent,
    BuscarAdministradorComponent,
    CrearVehiculoComponent,
    EditarVehiculoComponent,
    EliminarVehiculoComponent,
    BuscarVehiculoComponent,
    CrearTipoVehiculoComponent,
    EditarTipoVehiculoComponent,
    EliminarTipoVehiculoComponent,
    BuscarTipoVehiculoComponent,
    CrearSolicitudComponent,
    BuscarSolicitudComponent,
    EditarSolicitudComponent,
    EliminarSolicitudComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
