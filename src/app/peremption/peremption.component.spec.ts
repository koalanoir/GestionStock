import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeremptionComponent } from './peremption.component';

describe('PeremptionComponent', () => {
  let component: PeremptionComponent;
  let fixture: ComponentFixture<PeremptionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PeremptionComponent]
    });
    fixture = TestBed.createComponent(PeremptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
