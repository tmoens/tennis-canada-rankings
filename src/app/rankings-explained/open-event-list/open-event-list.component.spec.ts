import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenEventListComponent } from './open-event-list.component';

describe('OpenEventListComponent', () => {
  let component: OpenEventListComponent;
  let fixture: ComponentFixture<OpenEventListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpenEventListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpenEventListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
