import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

export type IconsData = {
    imageSrc: string,
    rounded?: boolean,
    title?: string,
    text?: string,
    link?: string,
    linkText?: string,
};

@Component({
    selector: 'app-icons[data]',
    templateUrl: './icons.component.html',
    styleUrls: ['./icons.component.scss'],
})
export class IconsComponent {

    @Input() data: IconsData[] = [];
    @Input() grayscale = false;
    @Input() size: 'sm' | 'lg' | 'xl' = 'lg';
    @Input() border = 'border';

    constructor(private router: Router) { }

    openUrl(url: string): void {
        if (url.startsWith('http')) {
            window.open(url);
        } else {
            this.router.navigate([url]);
        }
    }

}
