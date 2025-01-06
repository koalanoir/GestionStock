import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FonctionnalitesComponent } from './fonctionnalites.component';

describe('FonctionnalitesComponent', () => {
  let component: FonctionnalitesComponent;
  let fixture: ComponentFixture<FonctionnalitesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FonctionnalitesComponent]
    });
    fixture = TestBed.createComponent(FonctionnalitesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
