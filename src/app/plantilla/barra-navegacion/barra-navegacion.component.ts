import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ModeloIdentificar } from 'src/app/modelos/identificar.modelo';
import { SeguridadService } from 'src/app/servicios/seguridad.service';

@Component({
  selector: 'app-barra-navegacion',
  templateUrl: './barra-navegacion.component.html',
  styleUrls: ['./barra-navegacion.component.css']
})
export class BarraNavegacionComponent implements OnInit {
  seInicioSesion:boolean = false
  subs: Subscription = new Subscription();

  constructor(private seguridadService: SeguridadService) {  }

  ngOnInit(): void {
    this.subs = this.seguridadService.ObtenerDatosUsuarioEnSesion().subscribe((datos:ModeloIdentificar)=>{
      this.seInicioSesion = datos.estaIdentificado;
      /*if(datos){
        this.seInicioSesion = true;
      }else{
        this.seInicioSesion = false;
      }*/
    });

  }
}
