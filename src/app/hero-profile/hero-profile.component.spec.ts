import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeroProfileComponent } from './hero-profile.component';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { AppComponent } from '../app.component';
import { RouterTestingModule } from '@angular/router/testing';
import { ModalPollComponent } from '../modal-poll/modal-poll.component';
import { HeroesService } from '../heroes.service';
import { getTestBed, ComponentFixtureAutoDetect} from '@angular/core/testing'
import { of } from 'rxjs';
import { delay } from 'rxjs/internal/operators';

describe('HeroProfileComponent', () => {
  let component: HeroProfileComponent;
  let fixture: ComponentFixture<HeroProfileComponent>;
  

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA,
        NO_ERRORS_SCHEMA
      ],
      declarations: [
        AppComponent,
        ModalPollComponent,
        HeroProfileComponent  
      ],
      imports: [
        RouterTestingModule
      ],
      providers: [
        { provide: ComponentFixtureAutoDetect, useValue: true },
        { provide: HeroesService, useClass: HeroServiceMock }
      ]
      
    })
    .compileComponents();
  });

let heroesService: HeroesService;
 const HEROE_OBJECT ={
   id:'1',
   name:'Spiderman',
   description: 'El hombre que araña',
   modified:new Date(1518417160),
   thumbnail:
   {
   'path': 'https://i.pinimg.com/originals/c2/93/56/c293563aa553250601d8cb768c044d4b',
   'extension': 'jpg'
   },
   resourceURI:'http://gateway.marvel.com/v1/public/characters/1011334',
   teamColor:'yellow'};
 
class HeroServiceMock {
   public teams = new Map().set("1","yellow");

   public getHeroe(){
     return of({data:{results:HEROE_OBJECT}}).pipe(delay(1000));
   }

   public getTeamColor(){
     return "yellow";
   }
 }

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    heroesService = TestBed.get(HeroesService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Debería crear el heroe', () => {
    spyOn(heroesService, 'getHeroe').and.callThrough();
    component.ngOnInit();
    expect(heroesService.getHeroe).toHaveBeenCalled();
  }); 
});
