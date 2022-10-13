import { Component, Input} from '@angular/core';

import { Personaje } from '../interfaces/dbz.interfaces';
import { DbzSerivce } from '../services/dbz.service';
@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',

})
export class AgregarComponent  {

  
  @Input() nuevo: Personaje = {
    nombre: "",
    poder: 0
  }
  // @Output () onNuevoPersonaje: EventEmitter<Personaje> = new EventEmitter();

  cambiarNombre(event:any){
    console.log(event.target.value)    
  }
  constructor( private dbzSerivce:DbzSerivce ){

  }

  agregar( ){
      if (this.nuevo.nombre.trim().length === 0){
        return
      }
     // this.onNuevoPersonaje.emit(this.nuevo);
      this.dbzSerivce.agregarPersonaje(this.nuevo)
      this.nuevo = {
        nombre : '', 
        poder : 0
      }
  }

}
