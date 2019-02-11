import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataMailingComponent } from './data-mailing.component';

describe('DataMailingComponent', () => {
  let component: DataMailingComponent;
  let fixture: ComponentFixture<DataMailingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataMailingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataMailingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
