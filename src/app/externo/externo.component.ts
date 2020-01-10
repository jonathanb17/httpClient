import { Component, OnInit } from '@angular/core';
import { peticionesService } from './../service/peticiones.service';

@Component({
  selector: 'externo',
  templateUrl: './externo.component.html',
  styleUrls: ['./externo.component.css'],
  providers:[peticionesService]
})
export class ExternoComponent implements OnInit {

  public user:any;

  constructor(public _peticiones:peticionesService) { }

  ngOnInit() {

    this._peticiones.getService().subscribe(

        result=>{
            this.user= result.data;
        },
        error=>{
            console.log(<any>error)
        }
    )
  }

}
