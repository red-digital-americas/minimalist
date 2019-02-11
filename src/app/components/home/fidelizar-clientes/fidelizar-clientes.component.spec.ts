import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FidelizarClientesComponent } from './fidelizar-clientes.component';

describe('FidelizarClientesComponent', () => {
  let component: FidelizarClientesComponent;
  let fixture: ComponentFixture<FidelizarClientesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FidelizarClientesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FidelizarClientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
