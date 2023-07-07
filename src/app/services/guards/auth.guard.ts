import { Injectable } from '@angular/core';
 
@Injectable({
  providedIn: 'root'
})
export class AuthGuard    {

 
            

 /*  canLoad(route: Route, segments: import("@angular/router").UrlSegment[]): boolean | import("@angular/router").UrlTree | import("rxjs").Observable<boolean | import("@angular/router").UrlTree> | Promise<boolean | import("@angular/router").UrlTree> {
    return this._loginService.actualizarToken()
        .pipe(
          tap( estaAutenticado =>  {
            if ( !estaAutenticado ) {
              this.router.navigateByUrl('/login');
            }
          })
        );
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot) {

      return this._loginService.actualizarToken()
        .pipe(
          tap( estaAutenticado =>  {
            if ( !estaAutenticado ) {
              this.router.navigateByUrl('/login');
            }
          })
        );
  } */
  
}
