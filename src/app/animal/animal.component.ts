import { Component, OnInit, Input } from '@angular/core';
import { CatService } from '../cat.service';
import { Animal } from '../interfaces/animal';

@Component({
  selector: 'app-animal',
  templateUrl: './animal.component.html',
  styleUrls: ['./animal.component.css']
})
export class AnimalComponent implements OnInit {
  @Input() catRef: Animal;

  constructor() { }

  ngOnInit(): void {
  }

}
