import { TestBed } from '@angular/core/testing';
import { AdminGuard } from './admin.guard';
import { Router } from '@angular/router';
import { UsuarioFirestoreService } from '../services/usuario-firestore.service';
import { RouterTestingModule } from '@angular/router/testing';

describe('AdminGuard', () => {
  let guard: AdminGuard;
  let usuarioFirestoreService: jasmine.SpyObj<UsuarioFirestoreService>;
  let router: Router;

  beforeEach(() => {
    const usuarioFirestoreSpy = jasmine.createSpyObj('UsuarioFirestoreService', ['isAdmin']);
    
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      providers: [
        AdminGuard,
        { provide: UsuarioFirestoreService, useValue: usuarioFirestoreSpy }
      ]
    });

    guard = TestBed.inject(AdminGuard);
    usuarioFirestoreService = TestBed.inject(UsuarioFirestoreService) as jasmine.SpyObj<UsuarioFirestoreService>;
    router = TestBed.inject(Router);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });

  it('should activate if user is admin', () => {
    usuarioFirestoreService.isAdmin.and.returnValue(true);
    expect(guard.canActivate()).toBeTrue();
  });

  it('should not activate and redirect if user is not admin', () => {
    spyOn(router, 'navigate');
    usuarioFirestoreService.isAdmin.and.returnValue(false);

    expect(guard.canActivate()).toBeFalse();
    expect(router.navigate).toHaveBeenCalledWith(['/courses-carousel']);
  });
});
