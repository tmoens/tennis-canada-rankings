import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SplashImageSelectorComponent } from './splash-image-selector.component';

describe('SplashImageSelectorComponent', () => {
  let component: SplashImageSelectorComponent;
  let fixture: ComponentFixture<SplashImageSelectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SplashImageSelectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SplashImageSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
