import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnitAdminComponent } from './unit-admin.component';

describe('UnitAdminComponent', () => {
  let component: UnitAdminComponent;
  let fixture: ComponentFixture<UnitAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnitAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnitAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
