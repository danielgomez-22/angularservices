import { Injectable } from '@angular/core'; 
import { HttpClient } from '@angular/common/http';
import { firstValueFrom, Observable } from 'rxjs';
import { Plantilla } from '../models/plantilla';
import { Global } from '../global';
import { environment } from '../../environments/environment.development';

@Injectable()
export class ServicePlantilla {
    constructor(private _http: HttpClient){}

    getFuncionesPlantilla(): Observable<any> {
        let url = environment.urlApiPlantilla;
        let request = "api/plantilla/funciones"
        return this._http.get(url + request);
    }

    async getPlantillaByFuncionAsync(funcion: string): Promise<Plantilla[]> {
        let url = environment.urlApiPlantilla;
        let request = "api/plantilla/plantillafuncion/" + funcion;
        return firstValueFrom(this._http.get<Plantilla[]>(url + request));
    }

    async getPlantillaFunciones(funciones: Array<string>): Promise<Plantilla[]> {
        //funcion=Enfermera&funcion=Enfermero
        let content = ""        ;
        for (let fun of funciones ){
            content += "funcion=" + fun + "&";
        }
        content = content.substring(0, content.length - 1);
        let url = environment.urlApiPlantilla;
        let request = "api/plantilla/plantillafunciones?" + content;
        return firstValueFrom(this._http.get<Plantilla[]>(url + request));
    }
}