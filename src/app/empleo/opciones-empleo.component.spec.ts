import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpcionesEmpleoComponent } from './opciones-empleo.component';

describe('OpcionesEmpleoComponent', () => {
  let component: OpcionesEmpleoComponent;
  let fixture: ComponentFixture<OpcionesEmpleoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OpcionesEmpleoComponent]
    });
    fixture = TestBed.createComponent(OpcionesEmpleoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
