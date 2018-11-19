import { PerformanceService } from './../performance.service';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-upcoming-shows',
    templateUrl: './upcoming-shows.component.html',
    styleUrls: ['./upcoming-shows.component.scss']
})
export class UpcomingShowsComponent implements OnInit {
    perfs = [];

    constructor(private performanceService: PerformanceService) {}

    ngOnInit() {
        this.perfs = this.performanceService.indexLocal();
    }
}
