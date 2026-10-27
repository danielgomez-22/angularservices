import { Injectable } from '@angular/core'; 
import { HttpClient } from '@angular/common/http';
import { firstValueFrom, Observable } from 'rxjs';
import { Plantilla } from '../models/plantilla';
import { Global } from '../global';
import { environment } from '../../environments/environment.development';

@Injectable()
export class ServicePlantilla {
    constructor(private _http: HttpClient) {

    }

    async getPlantillaAsync(): Promise<string[]> {
        let urlApi = environment.urlApiPlantilla;
        let request = "api/Plantilla/Funciones";
        return firstValueFrom(this._http.get<string[]>(urlApi + request));   
        
    }

    async getTodosLosEmpleadosAsync(): Promise<Plantilla[]> {
        let urlApi = environment.urlApiPlantilla;
        let request = "api/Plantilla";
        return firstValueFrom(this._http.get<Plantilla[]>(urlApi + request));
    }   

}