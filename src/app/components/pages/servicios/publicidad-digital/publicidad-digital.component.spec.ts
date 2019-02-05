import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicidadDigitalComponent } from './publicidad-digital.component';

describe('PublicidadDigitalComponent', () => {
  let component: PublicidadDigitalComponent;
  let fixture: ComponentFixture<PublicidadDigitalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublicidadDigitalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicidadDigitalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
