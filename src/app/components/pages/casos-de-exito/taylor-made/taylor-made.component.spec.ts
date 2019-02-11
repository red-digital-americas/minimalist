import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaylorMadeComponent } from './taylor-made.component';

describe('TaylorMadeComponent', () => {
  let component: TaylorMadeComponent;
  let fixture: ComponentFixture<TaylorMadeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaylorMadeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaylorMadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
