import { Injectable } from "@angular/core";
import { Personaje } from '../interfaces/dbz.interfaces';





@Injectable()

export class DbzSerivce{

    private _personajes: Personaje[] = [
        {
          nombre:'Goku',
          poder:10000
        },
        {
          nombre:'Vegeta',
          poder: 9500
        }
      ];
    get personajes(){
        return [... this._personajes]    
    }
    constructor(){
        console.log('Servicio Inicializado')
    }
    agregarPersonaje( personaje:Personaje ){
        this._personajes.push(personaje)
    }
}