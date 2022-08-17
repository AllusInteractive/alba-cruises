import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimesCostsComponent } from './times-costs.component';

describe('TimesCostsComponent', () => {
  let component: TimesCostsComponent;
  let fixture: ComponentFixture<TimesCostsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimesCostsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimesCostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
