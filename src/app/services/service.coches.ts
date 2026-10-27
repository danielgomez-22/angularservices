import { Injectable } from '@angular/core'; 
import { HttpClient } from '@angular/common/http';
import { firstValueFrom, Observable } from 'rxjs';
import { Coche } from '../models/coche';
import { Global } from '../global';
import { environment } from '../../environments/environment.development';

@Injectable()
export class ServiceCoches {
    constructor(private _http: HttpClient) { 

    }

    async getChochesAsync(): Promise<Coche[]> {
        let url = environment.urlApiCoches;
        let request = "webresources/coches";
        return firstValueFrom(this._http.get<Coche[]>(url + request));
    }
}