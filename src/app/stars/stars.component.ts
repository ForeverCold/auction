import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.css']
})
export class StarsComponent implements OnInit, OnChanges {

  @Input()
  rating: number = 0;

  stars: boolean[];

  @Input()
  readyOnly: boolean = true;

  @Output()
  ratingChange: EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.stars = [];
    for (let i = 1; i <= 5; i++ ) { // Math.round(this.rating)
      this.stars.push(i > this.rating);
    }

  }

  clickStar(index: number) {
    if (!this.readyOnly) {
      this.rating = index + 1;
      this.ratingChange.emit(this.rating);
    }
  }

}
