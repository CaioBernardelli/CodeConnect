import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuariosfirebaseComponent } from './usuariosfirebase.component';

describe('UsuariosfirebaseComponent', () => {
  let component: UsuariosfirebaseComponent;
  let fixture: ComponentFixture<UsuariosfirebaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsuariosfirebaseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsuariosfirebaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
