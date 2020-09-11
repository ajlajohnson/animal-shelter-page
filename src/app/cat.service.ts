import { Injectable } from '@angular/core';
import { Animal } from './interfaces/animal';


@Injectable({
  providedIn: 'root'
})

export class CatService {
  cats: Animal[] = [
    {
      name: 'Shadow',
      age: 2,
      isVaccinated: true,
    },
    {
      name: 'Luna',
      age: 4,
      isVaccinated: true,
    },
    {
      name: 'Butterscotch',
      age: 7,
      isVaccinated: false,
    }
  ];

  constructor() { }

  getCatsFromService() {
    return this.cats;
  }

  addCat(cat: Animal) {
    this.cats.push(cat);
    console.log(this.cats);
  }


}
