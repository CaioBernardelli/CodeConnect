import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchasingCourseComponent } from './purchasing-course.component';

describe('PurchasingCourseComponent', () => {
  let component: PurchasingCourseComponent;
  let fixture: ComponentFixture<PurchasingCourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PurchasingCourseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PurchasingCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
