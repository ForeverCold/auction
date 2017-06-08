import { Injectable } from '@angular/core';

@Injectable()
export class StockService {

  constructor() { }

  private stocks: Stock[] = [
    new Stock(1, '第一支股票', 1.99, 1.5, '這是第一只測試股票', ['IT', '互聯網']),
    new Stock(2, '第二支股票', 1.99, 2.5, '這是第二只測試股票', ['IT', '金融']),
    new Stock(3, '第三支股票', 1.99, 3.5, '這是第三只測試股票', ['金融', '互聯網']),
    new Stock(4, '第四支股票', 1.99, 4.5, '這是第四只測試股票', ['IT']),
    new Stock(5, '第五支股票', 3.99, 2, '這是第五只測試股票', ['互聯網']),
    new Stock(6, '第六支股票', 1.99, 2.5, '這是第六只測試股票', ['互联网', 'IT']),
    new Stock(7, '第七支股票', 1.99, 3.5, '這是第七只測試股票', ['金融', '互联网']),
    new Stock(8, '第八支股票', 1.99, 4.5, '這是第八只測試股票', ['金融', 'IT'])
  ];

  getstocks(): Stock[] {
    return this.stocks;
  }

  getstock(id: number):Stock {
    let stock = this.stocks.find( stock => stock.id == id);
    if (!stock) {
      stock = new Stock(0, '', 0, 0, '', ['']);
    }
    return stock;
  }

}

export class Stock {
  constructor(
    public id: number,
    public name: string,
    public price: number,
    public rating: number,
    public desc: string,
    public categories: Array<String>
  ) {}
}
