import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviewcvComponent } from './previewcv.component';

describe('PreviewcvComponent', () => {
  let component: PreviewcvComponent;
  let fixture: ComponentFixture<PreviewcvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreviewcvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreviewcvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
