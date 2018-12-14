import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeniorPtComponent } from './senior-pt.component';

describe('SeniorPtComponent', () => {
  let component: SeniorPtComponent;
  let fixture: ComponentFixture<SeniorPtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeniorPtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeniorPtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
