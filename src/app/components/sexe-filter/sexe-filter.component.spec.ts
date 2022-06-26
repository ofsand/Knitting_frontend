import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SexeFilterComponent } from './sexe-filter.component';

describe('SexeFilterComponent', () => {
  let component: SexeFilterComponent;
  let fixture: ComponentFixture<SexeFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SexeFilterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SexeFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
