import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Projects2Component } from './projects2.component';

describe('Projects2Component', () => {
  let component: Projects2Component;
  let fixture: ComponentFixture<Projects2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Projects2Component]
    });
    fixture = TestBed.createComponent(Projects2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
