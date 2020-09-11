import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CatService } from '../cat.service';
import { Animal } from '../interfaces/animal';
import { Router } from '@angular/router';


@Component({
  selector: 'app-animal-form',
  templateUrl: './animal-form.component.html',
  styleUrls: ['./animal-form.component.css']
})
export class AnimalFormComponent implements OnInit {

  constructor(private service: CatService, private router: Router) { }

  ngOnInit(): void {
  }

  addAnimal(form: NgForm) {
    let newCat: Animal = {
      name: form.value.name,
      age: form.value.age,
      isVaccinated: form.value.isVaccinated === "true",
    };
    this.service.addCat(newCat);
    this.router.navigate(['cats']);
    // this.service.addCat(form.value);
  }

}
