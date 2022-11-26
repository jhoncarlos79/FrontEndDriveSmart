import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { ModeloCliente } from 'src/app/modelos/cliente.modelo';
import { ClienteService } from 'src/app/servicios/cliente.service';

@Component({
  selector: 'app-editar-cliente',
  templateUrl: './editar-cliente.component.html',
  styleUrls: ['./editar-cliente.component.css']
})

export class EditarClienteComponent implements OnInit{
  
  id:string = '';

  fgValidar: FormGroup = this.fb.group({
    'id': [''],
    'nombre': ['', [Validators.required]],
    'apellido': ['', [Validators.required]],
    'tipoDocumento': ['', [Validators.required]],
    'documento': ['', [Validators.required]],
    'direccion': ['', [Validators.required]],
    'telefono': ['', [Validators.required]],
    'correo': ['', [Validators.required, Validators.email]],
    'contrasena': ['']
  });

  constructor(private fb:FormBuilder, private clienteService:ClienteService, private router:Router, private route:ActivatedRoute) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params["id"];
    this.BuscarProducto();
  }

  BuscarProducto(){
    this.clienteService.ObtenerClientePorId(this.id).subscribe((datos:ModeloCliente)=>{
      this.fgValidar.controls["id"].setValue(this.id);
      this.fgValidar.controls["nombre"].setValue(datos.nombre);
      this.fgValidar.controls["apellido"].setValue(datos.apellido);
      this.fgValidar.controls["tipoDocumento"].setValue(datos.tipoDocumento);
      this.fgValidar.controls["documento"].setValue(datos.documento);
      this.fgValidar.controls["direccion"].setValue(datos.direccion);
      this.fgValidar.controls["telefono"].setValue(datos.telefono);
      this.fgValidar.controls["correo"].setValue(datos.correo);
      this.fgValidar.controls["contrasena"].setValue(datos.contrasena);
    });
  }

  EditarCliente(){    
    let nombre = this.fgValidar.controls["nombre"].value;
    let apellido = this.fgValidar.controls["apellido"].value;
    let tipoDocumento = parseInt(this.fgValidar.controls["tipoDocumento"].value);
    let documento = this.fgValidar.controls["documento"].value;
    let direccion = this.fgValidar.controls["direccion"].value;
    let telefono = this.fgValidar.controls["telefono"].value;
    let correo = this.fgValidar.controls["correo"].value;
    let contrasena = this.fgValidar.controls["contrasena"].value;
    let c = new ModeloCliente();
    c.id = this.id;
    c.nombre = nombre;
    c.apellido = apellido;
    c.tipoDocumento = tipoDocumento;
    c.documento = documento;
    c.direccion = direccion;
    c.telefono = telefono;
    c.correo = correo;
    c.contrasena = contrasena;

    this.clienteService.ActualizarCliente(c).subscribe((datos:ModeloCliente)=>{
      alert("Cliente Actualizado");
      this.router.navigate(["/administracion/buscar-cliente"]);
    }, (error: any)=>{
      alert("El cliente no se actualizo");
    });
  }
}
