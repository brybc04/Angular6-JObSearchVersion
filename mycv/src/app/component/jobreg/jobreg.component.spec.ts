import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobregComponent } from './jobreg.component';

describe('JobregComponent', () => {
  let component: JobregComponent;
  let fixture: ComponentFixture<JobregComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobregComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobregComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
