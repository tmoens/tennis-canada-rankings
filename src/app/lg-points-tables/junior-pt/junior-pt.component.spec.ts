import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JuniorPtComponent } from './junior-pt.component';

describe('JuniorPtComponent', () => {
  let component: JuniorPtComponent;
  let fixture: ComponentFixture<JuniorPtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JuniorPtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JuniorPtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
