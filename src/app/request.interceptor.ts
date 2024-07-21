import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class RequestInterceptor implements HttpInterceptor {

  constructor() { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    // console.log("interceptor ",request);
    // return next.handle(request);

    // remember we cant modify / should not modify original one 
    const newRequest = request.clone({
      headers: new HttpHeaders({ token: '7456268452' })
    });
    return next.handle(newRequest);
  } 
}
