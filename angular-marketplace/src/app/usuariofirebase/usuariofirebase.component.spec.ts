import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuariofirebaseComponent } from './usuariofirebase.component';

describe('UsuariofirebaseComponent', () => {
  let component: UsuariofirebaseComponent;
  let fixture: ComponentFixture<UsuariofirebaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsuariofirebaseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsuariofirebaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
