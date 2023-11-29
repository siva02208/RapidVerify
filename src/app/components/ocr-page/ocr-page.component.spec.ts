import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OcrPageComponent } from './ocr-page.component';

describe('OcrPageComponent', () => {
  let component: OcrPageComponent;
  let fixture: ComponentFixture<OcrPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OcrPageComponent]
    });
    fixture = TestBed.createComponent(OcrPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
