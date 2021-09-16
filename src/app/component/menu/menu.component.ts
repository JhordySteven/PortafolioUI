import { Component, OnInit } from '@angular/core';
import { FapiRestService } from '../../Service/fapi-rest.service';
import { MenuBE } from '../../interface/menuBE.model';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  private menu:MenuBE;
  objMenu:any[];

  constructor(private fapi:FapiRestService) { }
  
  ngOnInit(): void {
    this.listarMenu();
  }
  listarMenu(){
    this.menu={
      idMaestro:5,
      opcion:2
    };
    this.fapi.fapiGetParameter('listMaestro',this.menu.opcion+'/'+this.menu.idMaestro).subscribe(x=>{
      console.log(x[0]);
      this.objMenu=x[0];
      console.log(this.objMenu);
    })
  }
}
