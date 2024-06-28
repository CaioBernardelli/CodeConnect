import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RotatingCarouselComponent } from './rotating-carousel.component';

describe('RotatingCarouselComponent', () => {
  let component: RotatingCarouselComponent;
  let fixture: ComponentFixture<RotatingCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RotatingCarouselComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RotatingCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
