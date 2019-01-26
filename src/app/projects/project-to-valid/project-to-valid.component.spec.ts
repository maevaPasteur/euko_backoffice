import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectToValidComponent } from './project-to-valid.component';

describe('ProjectToValidComponent', () => {
  let component: ProjectToValidComponent;
  let fixture: ComponentFixture<ProjectToValidComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectToValidComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectToValidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
