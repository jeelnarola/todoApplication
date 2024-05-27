import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpoyeeFormComponent } from './empoyee-form.component';

describe('EmpoyeeFormComponent', () => {
  let component: EmpoyeeFormComponent;
  let fixture: ComponentFixture<EmpoyeeFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmpoyeeFormComponent]
    });
    fixture = TestBed.createComponent(EmpoyeeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
