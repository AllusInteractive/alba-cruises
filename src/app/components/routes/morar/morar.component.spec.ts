import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MorarComponent } from './morar.component';

describe('MorarComponent', () => {
  let component: MorarComponent;
  let fixture: ComponentFixture<MorarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MorarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MorarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
