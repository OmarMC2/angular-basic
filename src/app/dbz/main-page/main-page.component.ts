import { Component, OnInit } from '@angular/core';
import { Personaje } from "../interfaces/dbz.interfaces";
import { AgregarComponent } from '../agregar/agregar.component';
import { DbzSerivce } from '../services/dbz.service';



@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {
  
  
  nuevo: Personaje = {
    nombre: 'Maestro Roshi',
    poder: 1000
  }

  
}
