import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WheelchairPtComponent } from './wheelchair-pt.component';

describe('WheelchairPtComponent', () => {
  let component: WheelchairPtComponent;
  let fixture: ComponentFixture<WheelchairPtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WheelchairPtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WheelchairPtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
