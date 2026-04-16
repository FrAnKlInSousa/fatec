import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroChamado } from './cadastro-chamado';

describe('CadastroChamado', () => {
  let component: CadastroChamado;
  let fixture: ComponentFixture<CadastroChamado>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CadastroChamado],
    }).compileComponents();

    fixture = TestBed.createComponent(CadastroChamado);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
