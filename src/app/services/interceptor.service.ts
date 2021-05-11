import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService {

  constructor(private authService: AuthService ) {}
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
let auth = this.authService.getToken()
let tokenReq = req.clone({
  setHeaders:{
    Authorization:`Bearer ${auth}`

  }
})
return next .handle(tokenReq)
  }
}
