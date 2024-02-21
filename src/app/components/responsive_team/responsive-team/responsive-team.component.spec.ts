import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResponsiveTeamComponent } from './responsive-team.component';

describe('ResponsiveTeamComponent', () => {
  let component: ResponsiveTeamComponent;
  let fixture: ComponentFixture<ResponsiveTeamComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResponsiveTeamComponent]
    });
    fixture = TestBed.createComponent(ResponsiveTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
