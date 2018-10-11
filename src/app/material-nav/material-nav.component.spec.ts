import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialNavComponent } from './material-nav.component';

describe('MaterialNavComponent', () => {
  let component: MaterialNavComponent;
  let fixture: ComponentFixture<MaterialNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaterialNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterialNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
