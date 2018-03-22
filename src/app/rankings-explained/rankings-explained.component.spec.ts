import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RankingsExplainedComponent } from './rankings-explained.component';

describe('RankingsExplainedComponent', () => {
  let component: RankingsExplainedComponent;
  let fixture: ComponentFixture<RankingsExplainedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RankingsExplainedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RankingsExplainedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
