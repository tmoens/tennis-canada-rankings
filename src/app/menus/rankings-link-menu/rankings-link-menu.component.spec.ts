import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RankingsLinkMenuComponent } from './rankings-link-menu.component';

describe('RankingsLinkMenuComponent', () => {
  let component: RankingsLinkMenuComponent;
  let fixture: ComponentFixture<RankingsLinkMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RankingsLinkMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RankingsLinkMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
