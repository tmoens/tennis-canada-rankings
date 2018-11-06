import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RankingHistoryComponent } from './ranking-history.component';

describe('RankingHistoryComponent', () => {
  let component: RankingHistoryComponent;
  let fixture: ComponentFixture<RankingHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RankingHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RankingHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
