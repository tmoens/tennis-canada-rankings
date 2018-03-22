import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StateViewerComponent } from './state-viewer.component';

describe('StateViewerComponent', () => {
  let component: StateViewerComponent;
  let fixture: ComponentFixture<StateViewerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StateViewerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StateViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
