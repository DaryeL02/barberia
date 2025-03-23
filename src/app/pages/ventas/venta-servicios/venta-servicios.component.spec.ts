import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VentaServiciosComponent } from './venta-servicios.component';

describe('VentaServiciosComponent', () => {
  let component: VentaServiciosComponent;
  let fixture: ComponentFixture<VentaServiciosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VentaServiciosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VentaServiciosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
