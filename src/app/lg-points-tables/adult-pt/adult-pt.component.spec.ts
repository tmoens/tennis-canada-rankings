import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdultPtComponent } from './adult-pt.component';

describe('AdultPtComponent', () => {
  let component: AdultPtComponent;
  let fixture: ComponentFixture<AdultPtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdultPtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdultPtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
