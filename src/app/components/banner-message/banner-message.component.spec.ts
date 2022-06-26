import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerMessageComponent } from './banner-message.component';

describe('BannerMessageComponent', () => {
  let component: BannerMessageComponent;
  let fixture: ComponentFixture<BannerMessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BannerMessageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BannerMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
