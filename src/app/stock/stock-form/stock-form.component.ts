import { Component, OnInit } from '@angular/core';
import { Stock } from '../stock-mange/stock-mange.component';

@Component({
  selector: 'app-stock-form',
  templateUrl: './stock-form.component.html',
  styleUrls: ['./stock-form.component.css']
})
export class StockFormComponent implements OnInit {

  stock: Stock;

  constructor() { }

  ngOnInit() {
    this.stock = new Stock(1, '第一支股票', 1.99, 1.5, '這是第一只測試股票', ['IT', '互聯網']);
  }

}
