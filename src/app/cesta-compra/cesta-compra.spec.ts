import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CestaCompra } from './cesta-compra';

describe('CestaCompra', () => {
  let component: CestaCompra;
  let fixture: ComponentFixture<CestaCompra>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CestaCompra],
    }).compileComponents();

    fixture = TestBed.createComponent(CestaCompra);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
