import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.css']
})
export class StarsComponent implements OnInit {

  @Input()
  rating: number = 0;

  stars: boolean[];

  constructor() { }

  ngOnInit() {
    this.stars = [];
    for (let i = 1; i <= 5; i++ ) { // Math.round(this.rating)
      this.stars.push(i > this.rating);
    }
  }

  clickStar(index: number) {
    this.stars = [];
    this.rating = index + 1;
    for (let i = 1; i <= 5; i++ ) { // Math.round(this.rating)
      this.stars.push(i > this.rating);
    }
  }

}
