import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PassportpageComponent } from './passportpage.component';

describe('PassportpageComponent', () => {
  let component: PassportpageComponent;
  let fixture: ComponentFixture<PassportpageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PassportpageComponent]
    });
    fixture = TestBed.createComponent(PassportpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
