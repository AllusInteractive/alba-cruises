import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MuckComponent } from './muck.component';

describe('MuckComponent', () => {
  let component: MuckComponent;
  let fixture: ComponentFixture<MuckComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MuckComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MuckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
