import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { environment } from '../environments/environment';

declare var ga: (a: string, b: string, c: string) => void;

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    standalone: false,
})
export class AppComponent implements OnInit {

    private currentPage = '';

    constructor(private router: Router) {}

    ngOnInit(): void {

        // Only subscribe to router events for Google Analytics if we are live
        if (!environment.production) {
            return;
        }

        // Listen to router to detect page changes
        this.router.events.subscribe(
            (event) => {
                if (event instanceof NavigationEnd && this.currentPage !== this.router.url) {
                    ga('send', 'pageview', this.router.url);
                    this.currentPage = this.router.url;
                }
            },
        );
    }

}
