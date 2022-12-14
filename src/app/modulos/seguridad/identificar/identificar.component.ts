import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import * as CryptoJS from 'crypto-js';
import { SeguridadService } from 'src/app/servicios/seguridad.service';

@Component({
  selector: 'app-identificar',
  templateUrl: './identificar.component.html',
  styleUrls: ['./identificar.component.css']
})
export class IdentificarComponent {

  fgValidar: FormGroup = this.fb.group({
    'usuario': ['', [Validators.required, Validators.email]],
    'clave': ['', [Validators.required]]
  })

  constructor(private fb: FormBuilder, private servicioSeguridad: SeguridadService, private router: Router){}

  IdentificarUsuario(){
    let usuario = this.fgValidar.controls["usuario"].value;
    let clave = this.fgValidar.controls["clave"].value;
    let claveCifrada = CryptoJS.MD5(clave).toString();
    //alert("Datos Validados " + usuario + " / " + clave);
    this.servicioSeguridad.IdentificarCliente(usuario, claveCifrada).subscribe((datos: any)=> {
      this.servicioSeguridad.AlmacenarSesion(datos);
      this.router.navigate(["/inicio"]);
    }, (error: any) => {
      alert("Error");
    })
  }


}
