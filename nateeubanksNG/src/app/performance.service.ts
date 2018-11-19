import { Performance } from './performance';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class PerformanceService {
    private url = 'rest/';

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
        return this.http.get<string>(this.url + 'ping');
    }

    index() {
        return this.http.get<any[]>(this.url);
    }

    create(performance: Performance) {
        return this.http.post<any>(this.url + 'create', performance, this.httpOptions);
    }

    update(id: number, performance: Performance) {
        return this.http.put<any>(this.url + id, performance, this.httpOptions);
    }

    destroy(id: number) {
        return this.http.delete<any>(this.url + id, this.httpOptions);
    }

    indexLocal(): Performance[] {
        return this.performances;
    }

    createLocal(performance: Performance): void {
        this.performances.push(performance);
    }

    constructor(private http: HttpClient) {}
}
