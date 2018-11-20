import { PerformanceService } from './../performance.service';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-upcoming-shows',
    templateUrl: './upcoming-shows.component.html',
    styleUrls: ['./upcoming-shows.component.scss']
})
export class UpcomingShowsComponent implements OnInit {
    perfs = [];

    load() {
        this.performanceService.index().subscribe(
            data => {
                this.perfs = data;
            },
            error => {
                console.error(error);
            }
        );
    }

    show(id) {
        this.performanceService.show(id).subscribe(
            data => {
                return data;
            },
            error => {
                console.error(error);
            }
        );
    }

    update(performance) {
        this.performanceService.update(performance).subscribe(
            data => {
                this.perfs = data;
            },
            error => {
                console.error(error);
            }
        );
    }

    create(performance) {
        this.performanceService.create(performance).subscribe(
            data => {
                this.perfs.push(performance);
            },
            error => {
                console.error(error);
            }
        );
    }

    destroy(id) {
        this.performanceService.destroy(id).subscribe(
            data => {
                this.load();
            },
            error => {
                console.error(error);
            }
        );
    }
    constructor(private performanceService: PerformanceService) {}

    ngOnInit() {
        this.load();
    }
}
