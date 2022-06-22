import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LargeFooterComponent } from './large-footer.component';

describe('LargeFooterComponent', () => {
  let component: LargeFooterComponent;
  let fixture: ComponentFixture<LargeFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LargeFooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LargeFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
