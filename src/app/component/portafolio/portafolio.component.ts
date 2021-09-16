import { Component, OnInit } from '@angular/core';
import { FapiRestService } from '../../Service/fapi-rest.service';
import { AboutBE } from '../../interface/aboutbe.model';
import { RutaImg } from '../../Service/general';

@Component({
  selector: 'app-portafolio',
  templateUrl: './portafolio.component.html',
  styleUrls: ['./portafolio.component.css']
})
export class PortafolioComponent implements OnInit {
  private about:AboutBE;
  constructor(private fapi:FapiRestService) { }

  ngOnInit(): void {
  this.listarJobs();
  }
  arrayJobs:any;
  listarJobs(){
    this.about={
      opcion:5,
      estado:1
    }
    this.fapi.fapiGetParameter("listarJobs",this.about.opcion+'/'+this.about.estado).subscribe(x=>{
      this.arrayJobs=x[0];
      for (let i = 0; i < this.arrayJobs.length; i++) {
        this.arrayJobs[i].foto=RutaImg+this.arrayJobs[i].foto;
      }
    })
  }
}
