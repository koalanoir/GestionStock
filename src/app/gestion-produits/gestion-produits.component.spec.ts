import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionProduitsComponent } from './gestion-produits.component';

describe('GestionProduitsComponent', () => {
  let component: GestionProduitsComponent;
  let fixture: ComponentFixture<GestionProduitsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GestionProduitsComponent]
    });
    fixture = TestBed.createComponent(GestionProduitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
