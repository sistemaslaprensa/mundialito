import { HttpHeaders } from '@angular/common/http';
import { Injectable, } from '@angular/core';
import { environment } from './global';


const API_URL = environment.API_URL;



@Injectable({
    providedIn: 'root'
})
export class CabecerasService {

    constructor() { }

    public Headers() {

        return new HttpHeaders({
            "Content-type": "application/json",
            "Authorization": "Basic " + btoa("user:user")
        });
    }

    public HeadersAuth() {

        return new HttpHeaders({
            "Content-type": 'application/json',
            "Authorization": 'Bearer ' + JSON.parse(localStorage.getItem("identity")! as string)!.token
        });
    }

}

