import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuscarAdministradorComponent } from './administradores/buscar-administrador/buscar-administrador.component';
import { CrearAdministradorComponent } from './administradores/crear-administrador/crear-administrador.component';
import { EditarAdministradorComponent } from './administradores/editar-administrador/editar-administrador.component';
import { EliminarAdministradorComponent } from './administradores/eliminar-administrador/eliminar-administrador.component';
import { BuscarAsesorComponent } from './asesores/buscar-asesor/buscar-asesor.component';
import { CrearAsesorComponent } from './asesores/crear-asesor/crear-asesor.component';
import { EditarAsesorComponent } from './asesores/editar-asesor/editar-asesor.component';
import { EliminarAsesorComponent } from './asesores/eliminar-asesor/eliminar-asesor.component';
import { BuscarClienteComponent } from './clientes/buscar-cliente/buscar-cliente.component';
import { CrearClienteComponent } from './clientes/crear-cliente/crear-cliente.component';
import { EditarClienteComponent } from './clientes/editar-cliente/editar-cliente.component';
import { EliminarClienteComponent } from './clientes/eliminar-cliente/eliminar-cliente.component';
import { BuscarTipoVehiculoComponent } from './tipo-vehiculos/buscar-tipo-vehiculo/buscar-tipo-vehiculo.component';
import { CrearTipoVehiculoComponent } from './tipo-vehiculos/crear-tipo-vehiculo/crear-tipo-vehiculo.component';
import { EditarTipoVehiculoComponent } from './tipo-vehiculos/editar-tipo-vehiculo/editar-tipo-vehiculo.component';
import { EliminarTipoVehiculoComponent } from './tipo-vehiculos/eliminar-tipo-vehiculo/eliminar-tipo-vehiculo.component';
import { BuscarVehiculoComponent } from './vehiculos/buscar-vehiculo/buscar-vehiculo.component';
import { CrearVehiculoComponent } from './vehiculos/crear-vehiculo/crear-vehiculo.component';
import { EditarVehiculoComponent } from './vehiculos/editar-vehiculo/editar-vehiculo.component';
import { EliminarVehiculoComponent } from './vehiculos/eliminar-vehiculo/eliminar-vehiculo.component';

const routes: Routes = [
  {
    path: 'crear-administrador',
    component: CrearAdministradorComponent
  },
  {
    path: 'editar-administrador',
    component: EditarAdministradorComponent
  },
  {
    path: 'buscar-administrador',
    component: BuscarAdministradorComponent
  },
  {
    path: 'eliminar-administrador',
    component: EliminarAdministradorComponent
  },
  {
    path: 'crear-asesor',
    component: CrearAsesorComponent
  },
  {
    path: 'editar-asesor',
    component: EditarAsesorComponent
  },
  {
    path: 'buscar-asesor',
    component: BuscarAsesorComponent
  },
  {
    path: 'eliminar-asesor',
    component: EliminarAsesorComponent
  },
  {
    path: 'crear-cliente',
    component: CrearClienteComponent
  },
  {
    path: 'editar-cliente/:id',
    component: EditarClienteComponent
  },
  {
    path: 'buscar-cliente',
    component: BuscarClienteComponent
  },
  {
    path: 'eliminar-cliente/:id',
    component: EliminarClienteComponent
  },
  {
    path: 'crear-tipo-vehiculo',
    component: CrearTipoVehiculoComponent
  },
  {
    path: 'editar-tipo-vehiculo',
    component: EditarTipoVehiculoComponent
  },
  {
    path: 'buscar-tipo-vehiculo',
    component: BuscarTipoVehiculoComponent
  },
  {
    path: 'eliminar-tipo-vehiculo',
    component: EliminarTipoVehiculoComponent
  },
  {
    path: 'crear-vehiculo',
    component: CrearVehiculoComponent
  },
  {
    path: 'editar-vehiculo',
    component: EditarVehiculoComponent
  },
  {
    path: 'buscar-vehiculo',
    component: BuscarVehiculoComponent
  },
  {
    path: 'eliminar-vehiculo',
    component: EliminarVehiculoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministracionRoutingModule { }
