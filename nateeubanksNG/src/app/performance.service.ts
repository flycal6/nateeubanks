import { Performance } from './performance';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class PerformanceService {
    private url = 'rest/performance/';

    private httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json',
            Authorization: 'my-auth-token'
        })
    };

    private performances: Performance[] = [
        {
            id: 1,
            date: new Date(),
            clubName: 'first performance',
            location: 'Moscow, Russia',
            website: 'www.myweb.com.ru'
        },
        {
            id: 1,
            date: new Date(),
            clubName: 'second performance',
            location: 'St Petersburg, Russia',
            website: 'www.stpetes.com'
        }
    ];

    ping(): Observable<string> {
        return this.http.get<string>(this.url + 'ping').pipe(catchError(this.handleError));
    }

    kaboom(): Observable<string> {
        return this.http.get<string>(this.url + 'ping').pipe(catchError(this.handleError));
    }
    index(): Observable<Performance[]> {
        return this.http.get<any[]>(this.url + 'index').pipe(catchError(this.handleError));
    }

    show(id: number): Observable<Performance> {
        return this.http.get<any>(this.url + id).pipe(catchError(this.handleError));
    }

    create(performance: Performance) {
        return this.http.post<any>(this.url + 'create', performance, this.httpOptions).pipe(catchError(this.handleError));
    }

    update(performance: Performance) {
        return this.http.put<any>(this.url + performance.id, performance, this.httpOptions).pipe(catchError(this.handleError));
    }

    destroy(id: number) {
        return this.http.delete<any>(this.url + id, this.httpOptions).pipe(catchError(this.handleError));
    }

    indexLocal(): Performance[] {
        return this.performances;
    }

    createLocal(performance: Performance): void {
        this.performances.push(performance);
    }

    handleError(error: any) {
        console.log(error);
        return throwError(error || 'Performance Service Error');
    }

    constructor(private http: HttpClient) {}
}
