import { Component, OnInit } from '@angular/core';
import { CatService } from '../cat.service';
import { Animal } from '../interfaces/animal';


@Component({
  selector: 'app-cats',
  templateUrl: './cats.component.html',
  styleUrls: ['./cats.component.css']
})


export class CatsComponent implements OnInit {
  cats: Animal[];


  constructor(private service: CatService) { }


  ngOnInit(): void {
    this.getCats();
  }

  getCats() {
    this.cats = this.service.getCatsFromService();
  }

}
