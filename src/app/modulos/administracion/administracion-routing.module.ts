import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuscarAdministradorComponent } from './administrador/buscar-administrador/buscar-administrador.component';
import { CrearAdministradorComponent } from './administrador/crear-administrador/crear-administrador.component';
import { EditarAdministradorComponent } from './administrador/editar-administrador/editar-administrador.component';
import { EliminarAdministradorComponent } from './administrador/eliminar-administrador/eliminar-administrador.component';
import { BuscarAsesorComponent } from './asesor/buscar-asesor/buscar-asesor.component';
import { CrearAsesorComponent } from './asesor/crear-asesor/crear-asesor.component';
import { EditarAsesorComponent } from './asesor/editar-asesor/editar-asesor.component';
import { BuscarClienteComponent } from './cliente/buscar-cliente/buscar-cliente.component';
import { CrearClienteComponent } from './cliente/crear-cliente/crear-cliente.component';
import { EditarClienteComponent } from './cliente/editar-cliente/editar-cliente.component';
import { EliminarClienteComponent } from './cliente/eliminar-cliente/eliminar-cliente.component';
import { BuscarTipoVehiculoComponent } from './tipo-vehiculo/buscar-tipo-vehiculo/buscar-tipo-vehiculo.component';
import { CrearTipoVehiculoComponent } from './tipo-vehiculo/crear-tipo-vehiculo/crear-tipo-vehiculo.component';
import { EditarTipoVehiculoComponent } from './tipo-vehiculo/editar-tipo-vehiculo/editar-tipo-vehiculo.component';
import { EliminarTipoVehiculoComponent } from './tipo-vehiculo/eliminar-tipo-vehiculo/eliminar-tipo-vehiculo.component';
import { BuscarVehiculoComponent } from './vehiculo/buscar-vehiculo/buscar-vehiculo.component';
import { CrearVehiculoComponent } from './vehiculo/crear-vehiculo/crear-vehiculo.component';
import { EditarVehiculoComponent } from './vehiculo/editar-vehiculo/editar-vehiculo.component';
import { EliminarVehiculoComponent } from './vehiculo/eliminar-vehiculo/eliminar-vehiculo.component';

const routes: Routes = [
  {
    path: 'buscar-administrador',
    component: BuscarAdministradorComponent
  },
  {
    path: 'crear-administrador',
    component: CrearAdministradorComponent
  },
  {
    path: 'editar-administrador',
    component: EditarAdministradorComponent
  },
  {
    path: 'eliminar-administrador',
    component: EliminarAdministradorComponent
  },

  {
    path: 'buscar-asesor',
    component: BuscarAsesorComponent
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
    path: 'eliminar-asesor',
    component: EditarAsesorComponent
  },
  
  {
    path: 'buscar-cliente',
    component: BuscarClienteComponent
  },
  {
    path: 'crear-cliente',
    component: CrearClienteComponent
  },
  {
    path: 'editar-cliente',
    component: EditarClienteComponent
  },
  {
    path: 'eliminar-cliente',
    component: EliminarClienteComponent
  },

  {
    path: 'buscar-tipo-vehiculo',
    component: BuscarTipoVehiculoComponent
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
    path: 'eliminar-tipo-vehiculo',
    component: EliminarTipoVehiculoComponent
  },

  {
    path: 'buscar-vehiculo',
    component: BuscarVehiculoComponent
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
    path: 'eliminar-vehiculo',
    component: EliminarVehiculoComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministracionRoutingModule { }
