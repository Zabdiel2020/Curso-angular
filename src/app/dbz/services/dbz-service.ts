import { Injectable } from "@angular/core";
import { Personaje } from "../interfaces/dbz.interfaces";


@Injectable()

export class Dbzservice {

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

  constructor(){
    console.log('Servicio inicializado');
  }

}
