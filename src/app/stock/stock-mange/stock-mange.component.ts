import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Stock, StockService} from '../stock.service';
import 'rxjs/Rx';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-stock-mange',
  templateUrl: './stock-mange.component.html',
  styleUrls: ['./stock-mange.component.css']
})
export class StockMangeComponent implements OnInit {

  private stocks: Array<Stock>;

  private nameFilter: FormControl = new FormControl();

  private keywork: string;

  constructor(public router: Router, public stockserveice: StockService) { }

  ngOnInit() {
    this.stocks = this.stockserveice.getstocks();
    this.nameFilter.valueChanges
      .debounceTime(500)
      .subscribe(value => this.keywork = value);
  }

  create() {
    this.router.navigateByUrl('/stock/0');
  }

  update(stock: Stock) {
    this.router.navigateByUrl('/stock/' + stock.id);
  }

}


