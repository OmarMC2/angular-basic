import { Component } from '@angular/core';


@Component({
    selector: 'app-counter',
    template:`
    <h1>{{title}}</h1>
<span>{{counter}}</span>
<button (click)="acumular(base)">+{{base}}</button>
<button (click)="acumular(-base)">-{{base}}</button>
    `
})



export class ContadorComponent{
    public title: string = 'Contador App';
    public counter: number = 10;
    public base: number = 5;
  
    acumular (valor:number){
        this.counter += valor;
    }
}