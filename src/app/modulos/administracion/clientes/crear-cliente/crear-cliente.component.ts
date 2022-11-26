import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ModeloCliente } from 'src/app/modelos/cliente.modelo';
import { ClienteService } from 'src/app/servicios/cliente.service';

@Component({
  selector: 'app-crear-cliente',
  templateUrl: './crear-cliente.component.html',
  styleUrls: ['./crear-cliente.component.css']
})
export class CrearClienteComponent implements OnInit {
  
  fgValidar: FormGroup = this.fb.group({
    'nombre': ['', [Validators.required]],
    'apellido': ['', [Validators.required]],
    'tipoDocumento': ['', [Validators.required]],
    'documento': ['', [Validators.required]],
    'direccion': ['', [Validators.required]],
    'telefono': ['', [Validators.required]],
    'correo': ['', [Validators.required, Validators.email]]
  });

  constructor(private fb:FormBuilder, private clienteService:ClienteService, private router:Router) {}

  ngOnInit(): void {
    
  }

  GuardarCliente(){
    let nombre = this.fgValidar.controls["nombre"].value;
    let apellido = this.fgValidar.controls["apellido"].value;
    let tipoDocumento = parseInt(this.fgValidar.controls["tipoDocumento"].value);
    let documento = this.fgValidar.controls["documento"].value;
    let direccion = this.fgValidar.controls["direccion"].value;
    let telefono = this.fgValidar.controls["telefono"].value;
    let correo = this.fgValidar.controls["correo"].value;
    let c = new ModeloCliente();
    c.nombre = nombre;
    c.apellido = apellido;
    c.tipoDocumento = tipoDocumento;
    c.documento = documento;
    c.direccion = direccion;
    c.telefono = telefono;
    c.correo = correo;

    this.clienteService.CrearCliente(c).subscribe((datos:ModeloCliente)=>{
      alert("Cliente Creado");
      this.router.navigate(["/administracion/buscar-cliente"]);
    }, (error: any)=>{
      alert("El cliente no se creo");
    });
  }

}
