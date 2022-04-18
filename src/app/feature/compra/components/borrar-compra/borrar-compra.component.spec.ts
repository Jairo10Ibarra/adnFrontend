import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BorrarCompraComponent } from './borrar-compra.component';

describe('BorrarCompraComponent', () => {
  let component: BorrarCompraComponent;
  let fixture: ComponentFixture<BorrarCompraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BorrarCompraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BorrarCompraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
