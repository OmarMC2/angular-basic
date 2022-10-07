import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  
})
export class ListadoComponent  {
  heroes: string[]=['Spiderman','Hulk','Thor']
  heroeBorrado: string = ''
  deleteHero():void{
    this.heroeBorrado = this.heroes.shift() || '';
  }
  
}
