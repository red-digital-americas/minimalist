import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevosClientesComponent } from './nuevos-clientes.component';

describe('NuevosClientesComponent', () => {
  let component: NuevosClientesComponent;
  let fixture: ComponentFixture<NuevosClientesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NuevosClientesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevosClientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
