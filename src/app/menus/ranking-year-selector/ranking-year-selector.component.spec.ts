import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RankingYearSelectorComponent } from './ranking-year-selector.component';

describe('RankingYearSelectorComponent', () => {
  let component: RankingYearSelectorComponent;
  let fixture: ComponentFixture<RankingYearSelectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RankingYearSelectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RankingYearSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
