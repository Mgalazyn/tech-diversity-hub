import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mission3Component } from './mission3.component';

describe('Mission3Component', () => {
  let component: Mission3Component;
  let fixture: ComponentFixture<Mission3Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Mission3Component]
    });
    fixture = TestBed.createComponent(Mission3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
