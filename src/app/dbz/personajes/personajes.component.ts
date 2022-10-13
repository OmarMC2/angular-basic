import { Component} from '@angular/core';
import { DbzSerivce } from '../services/dbz.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  
})
export class PersonajesComponent {

  //@Input() personajes: Personaje[] = [];

  
  get personajes() {
    return this.dbzService.personajes;
  }
  

  constructor(private dbzService: DbzSerivce ){
    this.dbzService;
  }
}
