import { Component } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interfaces';



@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {

  personajes:Personaje[]= [
    {
      nombre:'Goku',
      poder:1500
    },
    {
      nombre:'Vegeta',
      poder:8500
    }
  ]

  nuevo: Personaje ={
    nombre: 'Maestro Rosi',
    poder: 1000
  }

  agregarNuevoPersonaje(argumento:Personaje){
    this.personajes.push(argumento);
  }

}
