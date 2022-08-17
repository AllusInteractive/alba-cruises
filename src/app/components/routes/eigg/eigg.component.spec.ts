import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EiggComponent } from './eigg.component';

describe('EiggComponent', () => {
  let component: EiggComponent;
  let fixture: ComponentFixture<EiggComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EiggComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EiggComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
