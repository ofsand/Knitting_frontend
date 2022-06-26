import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsFiltrationComponent } from './products-filtration.component';

describe('ProductsFiltrationComponent', () => {
  let component: ProductsFiltrationComponent;
  let fixture: ComponentFixture<ProductsFiltrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductsFiltrationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsFiltrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
