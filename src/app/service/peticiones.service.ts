import { Observable } from "rxjs";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()

export class peticionesService{

    public user:any;

    constructor(public http:HttpClient){
        this.user="https://reqres.in/";
    }

    getService():Observable<any>{
        return this.http.get(this.user+"api/users?page=2");
    }


}