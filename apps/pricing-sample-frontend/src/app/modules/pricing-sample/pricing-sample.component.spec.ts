import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PricingSampleComponent } from './pricing-sample.component';

describe('PricingSampleComponent', () => {
  let component: PricingSampleComponent;
  let fixture: ComponentFixture<PricingSampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PricingSampleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PricingSampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
