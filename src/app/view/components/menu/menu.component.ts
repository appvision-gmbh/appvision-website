import { Component, HostListener, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {

    readonly SCROLLED_TO_TOP_THRESHOLD = 200;

    activePage: 'safelog' | 'services' | 'company' | string = '';

    collapsed = true;

    transparent = true;

    @HostListener('window:scroll', ['$event'])
    onWindowScroll = ($event: Event): void => {
        const pos: number = (document.documentElement.scrollTop || document.body.scrollTop);
        this.transparent = pos <= this.SCROLLED_TO_TOP_THRESHOLD;
    };

    constructor(private router: Router) {
        this.router.events.subscribe(
            (value) => {
                if (value instanceof NavigationEnd) {
                    this.activePage = value.url.replace('/', '');
                }
            }
        );
    }

    ngOnInit(): void {
    }

    /**
     * Opens a link.
     */
    openLink(url: 'safelog' | 'services' | 'company' | ''): void {
        this.router.navigate([url]);
        this.activePage = url;
        this.collapsed = true;
    }

}
