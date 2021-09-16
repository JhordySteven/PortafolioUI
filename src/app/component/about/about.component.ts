import { Component, OnInit } from '@angular/core';
import { FapiRestService } from '../../Service/fapi-rest.service';
import { AboutBE } from '../../interface/aboutbe.model';
import { RutaImg } from '../../Service/general';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  private about:AboutBE;
  constructor(private fapi:FapiRestService) { }

  ngOnInit(): void {
    this.listarSkill();
    this.listarTipoSkill();
    this.listarAbout();
  }
  objTipoSkill:any;
  objSkill:any;
  arrayAbout:any;
  listarSkill(){
    this.about={
      estado:1,
      opcion:5
    }
    this.fapi.fapiGetParameter('listarSkill',this.about.opcion+'/'+this.about.estado).subscribe(x=>{
      this.objSkill=x[0];
      console.log(this.objSkill);
    })
  }
  listarTipoSkill(){
    this.about={
      opcion:2,
      idMaestro:3
    }
    this.fapi.fapiGetParameter('listMaestro',this.about.opcion+'/'+this.about.idMaestro).subscribe(x=>{
      this.objTipoSkill=x[0];
      console.log(this.objTipoSkill);
    })
  }
  listarAbout(){
    this.about={
      opcion:4,
      estado:0
    }
    this.fapi.fapiGetParameter("listarAbout",this.about.opcion+'/'+this.about.estado).subscribe(x=>{
      this.arrayAbout=x[0];
      for (let i = 0; i < this.arrayAbout.length; i++) {
        this.arrayAbout[i].foto=RutaImg+this.arrayAbout[i].foto;
      }
      console.log(this.arrayAbout);
    })
  }
}
