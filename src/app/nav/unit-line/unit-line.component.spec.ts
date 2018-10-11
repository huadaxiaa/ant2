import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnitLineComponent } from './unit-line.component';

describe('UnitLineComponent', () => {
  let component: UnitLineComponent;
  let fixture: ComponentFixture<UnitLineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnitLineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnitLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
