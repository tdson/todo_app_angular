import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexTodoComponent } from './index-todo.component';

describe('IndexTodoComponent', () => {
  let component: IndexTodoComponent;
  let fixture: ComponentFixture<IndexTodoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndexTodoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexTodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
