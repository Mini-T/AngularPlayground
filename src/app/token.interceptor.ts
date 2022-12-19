import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
 public static token: string

  constructor() {
  }

  // intercepte chaque requête http pour y injecter le token d'authentification
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (!request.url.startsWith('api/login') && TokenInterceptor.token) {
      /// on appelle un service du backend qui est protégé: prendre le token et l'ajouter à la requête
      request.headers.append('token', TokenInterceptor.token);
    }

    return next.handle(request);
  }
  getToken(){
    return TokenInterceptor.token
  }
}
