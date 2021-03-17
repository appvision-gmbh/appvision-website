import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {

    readonly SCROLLED_TO_TOP_THRESHOLD = 200;

    collapsed = true;

    transparent = true;

    @HostListener('window:scroll', ['$event'])
    onWindowScroll = ($event: Event): void => {
        const pos: number = (document.documentElement.scrollTop || document.body.scrollTop);
        this.transparent = pos <= this.SCROLLED_TO_TOP_THRESHOLD;
    };

    constructor(private router: Router) {}

    ngOnInit(): void {
    }

    /**
     * Opens a link.
     */
    openLink(url: string): void {
        this.router.navigate([url]);
        this.collapsed = true;
    }

}
