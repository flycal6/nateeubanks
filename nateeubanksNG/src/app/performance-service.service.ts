import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PerformanceServiceService {
    private performances: Performance [] = [
        new Performance(),
    ];

  constructor() { }
}
