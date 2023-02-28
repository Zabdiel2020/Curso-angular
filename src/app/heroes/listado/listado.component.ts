import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {

  heroes: string[] = ['Spiderman', 'Ironman', 'Hulk', 'Thor', 'Capitan América'];
  heroeBorrado:string='';


  borrarHeroe(){

    const heroeborrado = this.heroes.shift() || '';
    this.heroeBorrado = heroeborrado;

  }



}
