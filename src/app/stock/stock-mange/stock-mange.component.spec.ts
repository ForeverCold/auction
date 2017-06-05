import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StockMangeComponent } from './stock-mange.component';

describe('StockMangeComponent', () => {
  let component: StockMangeComponent;
  let fixture: ComponentFixture<StockMangeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StockMangeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StockMangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
