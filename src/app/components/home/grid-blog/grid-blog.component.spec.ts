import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GridBlogComponent } from './grid-blog.component';

describe('GridBlogComponent', () => {
  let component: GridBlogComponent;
  let fixture: ComponentFixture<GridBlogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GridBlogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
