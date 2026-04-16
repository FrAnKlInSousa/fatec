import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaChamado } from './lista-chamado';

describe('ListaChamado', () => {
  let component: ListaChamado;
  let fixture: ComponentFixture<ListaChamado>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaChamado],
    }).compileComponents();

    fixture = TestBed.createComponent(ListaChamado);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
