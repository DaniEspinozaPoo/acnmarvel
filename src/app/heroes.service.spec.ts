import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
// import { MockBackend } from '@angular/http/testing';
import { HeroesService } from './heroes.service';


describe('HeroesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [HeroesService,
        // {provide: XHRBackend, useClass: MockBackend}
      ]
    });
    // service = TestBed.get(HeroesService);

  });

  it('should be created', inject([HeroesService], (service: HeroesService) => {
    expect(service).toBeTruthy();
  }));

  
});

// afterEach(() => { 
//   service = null;
// });

// it('should test getHeroes function', () => {
//   spyOn(service, 'getHeroes').and.callThrough();
//   service.getHeroes();
//   expect(service.getHeroes).toHaveBeenCalled();
//   expect(service.heroes).toBeDefined();
// });


