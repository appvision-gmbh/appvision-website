import { Component, HostListener, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {

    readonly SCROLLED_TO_TOP_THRESHOLD = 200;

    collapsed = true;

    scrolledToTop = true;

    @HostListener('window:scroll', ['$event'])
    onWindowScroll = ($event: Event): void => {
        const pos: number = (document.documentElement.scrollTop || document.body.scrollTop);
        this.scrolledToTop = pos <= this.SCROLLED_TO_TOP_THRESHOLD;
    };

    ngOnInit(): void {
    }

}
