import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventStructureDialog } from './event-structure.component';

describe('EventStructureDialog', () => {
  let component: EventStructureDialog;
  let fixture: ComponentFixture<EventStructureDialog>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventStructureDialog ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventStructureDialog);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
