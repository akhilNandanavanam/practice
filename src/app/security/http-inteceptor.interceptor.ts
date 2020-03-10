import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class MyHttpInterceptor implements HttpInterceptor{
    constructor() {}
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{
        request = request.clone({
            setHeaders: {
                Authorization: `Bearer ${localStorage.getItem(`bearerToken`)}`,
                'X-tkr-email': 'akhil@mail.com'
            }
        });
        return next.handle(request);
    }
}
