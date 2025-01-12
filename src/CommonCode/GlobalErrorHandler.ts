import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GlobalErrorHandler implements HttpInterceptor {

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      catchError((error: any) => {
        console.error('Global Error Handler:', error);

        if (error.status === 401) {
          // Handle 401 Unauthorized error
          console.error('Unauthorized access');
        } else if (error.status === 500) {
          // Handle 500 Internal Server error
          console.error('Internal server error');
        } else {
          // Handle other errors
          console.error('An error occurred:', error.message);
        }

        return throwError(() => error);
      })
    );
  }

}