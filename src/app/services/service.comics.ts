import {Injectable} from '@angular/core';
import { Comic } from '../models/comic';

@Injectable()
export class ServiceComics {
    getComics(): Promise<Array<Comic>> {
        let path = "./assets/comics.json";
        return fetch(path).then(response => response.json()).then( (data: any) => {
            let arrayComics = [];
      //recorremos tod el array de comics json
        for (let elem of data ) {
        //creamos u comic de angular MODELO
        let comic = new Comic(
          elem.nombre, elem.imagen, elem.descripcion);
        //lo añadimos al array de comics
        arrayComics.push(comic);
        console.log(elem)
      }
      console.log(arrayComics)
      return arrayComics;
        })
    }

    async getComicsAsync(): Promise<Array<Comic>> {
        let path = "./assets/comics.json";
        let response = await fetch(path);
        let data = await response.json();
        let arrayComics: Array<Comic> = [];
        for (let elem of data) {
            let comic: Comic = new Comic(
                elem.nombre, elem.imagen, elem.descripcion);
            arrayComics.push(comic);
        }
        console.log(arrayComics);
        return arrayComics;
    }
}


