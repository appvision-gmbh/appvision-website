import { Component, HostListener } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

type PageUrl = 'safelog' | 'services' | 'company' | '';

@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.scss'],
})
export class MenuComponent  {

    readonly MENU_ITEMS: {
        url: PageUrl,
        title: string,
    }[] = [{
        url: 'safelog',
        title: 'SafeLog',
    }, {
        url: 'services',
        title: 'Dienstleistungen',
    }, {
        url: 'company',
        title: 'Unternehmen',
    }];

    readonly SCROLLED_TO_TOP_THRESHOLD = 200;

    activePage: PageUrl = '';

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
                    this.activePage = value.url.replace('/', '') as PageUrl;
                }
            }
        );
    }

    /**
     * Opens a link.
     */
    openLink(url: PageUrl): void {
        this.router.navigate([url]);
        this.activePage = url;
        this.collapsed = true;
    }

}
