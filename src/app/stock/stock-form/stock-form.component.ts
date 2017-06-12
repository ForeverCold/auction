import { Component, OnInit } from '@angular/core';
import {Stock, StockService} from '../stock.service';
import {ActivatedRoute, Router} from '@angular/router';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-stock-form',
  templateUrl: './stock-form.component.html',
  styleUrls: ['./stock-form.component.css']
})
export class StockFormComponent implements OnInit {

  formModel: FormGroup;

  stock: Stock;

  categories = ['IT', '互联网', '金融'];

  constructor(private routeInfo: ActivatedRoute, private stockservice: StockService,
    private router: Router
  ) { }

  ngOnInit() {
    const stockId = this.routeInfo.snapshot.params['id'];
    this.stock = this.stockservice.getstock(stockId);

    const fb = new FormBuilder();
    this.formModel = fb.group({
      name: [this.stock.name, [Validators.required, Validators.minLength(3)]],
      price: [this.stock.price, [Validators.required]],
      desc: [this.stock.desc],
      categories: fb.array([
        new FormControl(),
        new FormControl(),
        new FormControl()
      ])
    });
  }

  cancel()　{
    this.router.navigateByUrl('/stock');
  }

  save() {
    console.log(this.formModel.value);
    this.router.navigateByUrl('/stock');
  }

}
