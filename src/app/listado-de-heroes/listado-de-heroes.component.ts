import { Component, OnInit, ViewChild } from '@angular/core';
import { Heroe } from '../classes/heroe';
import { HeroesService } from '../heroes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listado-de-heroes',
  templateUrl: './listado-de-heroes.component.html',
  styleUrls: ['./listado-de-heroes.component.css']
})
export class ListadoDeHeroesComponent implements OnInit {

  public title = 'Héroes de Marvel';
  public searchString;
  // The child component : spinner
  //@ViewChild('spi') spinner;
   public heroes: Array<Heroe> = []; 

  constructor(public heroesService: HeroesService, private router:Router) { }

  submitSearch() {
    this.heroesService.resetPager();
    this.heroesService.getHeroes(this.searchString);
  }

  prevPage() {
    this.heroesService.getHeroes(this.searchString, this.heroesService.page - 1);
  }

  nextPage() {
    this.heroesService.getHeroes(this.searchString, this.heroesService.page + 1);
  }

  go_to(id){
    this.router.navigateByUrl('/heroe/'+id);
  }

  ngOnInit() {
    this.heroes.push(new Heroe(
      '1',
      'Spiderman',
      'El hombre que araña',
      new Date(),
      {
        'path': 'https://i.pinimg.com/originals/c2/93/56/c293563aa553250601d8cb768c044d4b',
        'extension': 'jpg'},
      'http://gateway.marvel.com/v1/public/characters/1011334',
      ''
    ));
    this.heroesService.getHeroes();
}
}
