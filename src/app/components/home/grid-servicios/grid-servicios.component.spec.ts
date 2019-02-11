import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GridServiciosComponent } from './grid-servicios.component';

describe('GridServiciosComponent', () => {
  let component: GridServiciosComponent;
  let fixture: ComponentFixture<GridServiciosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GridServiciosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridServiciosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
