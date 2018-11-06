import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VrRankingCategorySelectorComponent } from './vr-ranking-category-selector.component';

describe('VrRankingCategorySelectorComponent', () => {
  let component: VrRankingCategorySelectorComponent;
  let fixture: ComponentFixture<VrRankingCategorySelectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VrRankingCategorySelectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VrRankingCategorySelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
