import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClienteService } from 'src/app/servicios/cliente.service';

@Component({
  selector: 'app-eliminar-cliente',
  templateUrl: './eliminar-cliente.component.html',
  styleUrls: ['./eliminar-cliente.component.css']
})
export class EliminarClienteComponent implements OnInit {
  id:string = '';
  
  constructor(private clienteService:ClienteService, private router:Router, private route:ActivatedRoute){}

  ngOnInit(): void {
    this.id = this.route.snapshot.params["id"];
    this.EliminarCliente();
  }

  EliminarCliente(){
    this.clienteService.EliminarCliente(this.id).subscribe((datos:any)=>{
      this.router.navigate(["/administracion/buscar-cliente"]);
    });
  }

}
