import { Component, OnInit } from '@angular/core';
import { FapiRestService } from '../../Service/fapi-rest.service';
import { RutaImg } from '../../Service/general';
import { Principalpage } from '../../interface/principalpage.model';
import { ResultFunc } from 'rxjs/internal/observable/generate';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {
  private principalobj:Principalpage;
  arrayPrincipal:any[];
  arrayRedes:any[];
  muestra=['Desarrollador Web🉐','Apasionado de la tecnología🉐','Estudiante de Ingenieria🉐'];

  constructor(private fapi:FapiRestService) { }

  ngOnInit(): void {
    this.listarDescripcion();
    this.listarPrincipal();
  }
  listarPrincipal(){
    this.principalobj={
      opcion:5,
      estado:1
    };
    this.fapi.fapiGetParameter("listarPrincipal",this.principalobj.opcion+'/'+this.principalobj.estado).subscribe(x=>{
      this.arrayPrincipal=x[0];
      console.log(this.arrayPrincipal);
      for (let i = 0; i < this.arrayPrincipal.length; i++) {
        this.arrayPrincipal[i].foto=RutaImg+this.arrayPrincipal[i].foto;
      }
      this.listarDetalleRedes(this.arrayPrincipal[0].idprincipal);
    })
  }
  listarDetalleRedes(idprincipal){
    this.principalobj.opcion=5;
    this.fapi.fapiGetParameter('listarRedes',this.principalobj.opcion+'/'+idprincipal+'/'+1).subscribe(x=>{
      this.arrayRedes=x[0];
      console.log(this.arrayRedes);
    })
  }
  obDescripcion:any;
  //objDescripcion=['Desarrollador Web','Amante de la Tecnología','Estudiante de Ingeniería'];
  objDescripcion=[];
  listarDescripcion(){
    this.principalobj={
      opcion:5,
      estado:1
    };
    this.fapi.fapiGetParameter('listarDescripcion',this.principalobj.opcion+'/'+this.principalobj.estado).subscribe(result=>{
      debugger
      this.obDescripcion=result[0];
      for (let i = 0; i < this.obDescripcion.length; i++){
        this.objDescripcion.push(this.obDescripcion[i].nombre);
      }
      console.log("xddd")
      console.log(this.objDescripcion);      
      console.log(this.muestra);
    })
  }
}
