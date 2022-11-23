import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-identificar',
  templateUrl: './identificar.component.html',
  styleUrls: ['./identificar.component.css']
})
export class IdentificarComponent implements OnInit {

  fgValidar: FormGroup = this.fb.group({
    'usuario': ['',[Validators.required,Validators.email]],
    'clave': ['',[Validators.required]]
  });

  constructor(private fb: FormBuilder){}

  ngOnInit(): void {
  }

  IdentificarUsuario(){
    let usuario = this.fgValidar.controls["usuario"].value;
    let clave = this.fgValidar.controls["clave"].value;
    alert(usuario + " : " + clave);
  }
}
