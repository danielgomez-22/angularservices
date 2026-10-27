import { Injectable } from '@angular/core'; 
import { HttpClient } from '@angular/common/http';
import { firstValueFrom, Observable } from 'rxjs';
import { Persona } from '../models/persona';
import { Global } from '../global';
import { environment } from '../../environments/environment.development';

@Injectable()
export class ServicePersonas {
    constructor(private _http: HttpClient) { }

    getPersonas(): Observable<any> {
        let urlApi: string = environment.urlApiPersonas;
        return this._http.get(urlApi);
    }

    getPersonasPromise(): Promise<any> {
        let urlApi: string = environment.urlApiPersonas;
        let promise  = new Promise((resolve) => {
            //aqui leeemos la peticiion extrayendo los datos a la vez 
            this._http.get(urlApi).subscribe((response) => {
                resolve(response);                
            });
        });
        return promise;
    }
    async getPersonasAsync(): Promise<Persona[]> {
        let urlApi = environment.urlApiPersonas;
        return firstValueFrom(this._http.get<Persona[]>(urlApi))
    }
}