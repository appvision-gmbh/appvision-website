import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

export type GridItem = {
    // The column formatting
    colCssClass?: string, // grid only
    // Image
    imageSrc?: string, // use either imageSrc, ionicon or imageText
    ionicon?: string, // use either imageSrc, ionicon or imageText
    imageText?: string, // use either imageSrc, ionicon or imageText
    imageRounded?: boolean,
    imageBorder?: boolean,
    imagePadding?: string, // grid only
    // Text below / beside image
    title?: string,
    text?: string,
    // Url below text
    url?: string, // grid only
    urlText?: string, // grid only
};

@Component({
    selector: 'app-grid[items]',
    templateUrl: './grid.component.html',
    styleUrls: ['./grid.component.scss'],
    standalone: false
})
export class GridComponent {

    @Input() items: GridItem[] = [];
    @Input() format: 'grid' | 'list' = 'list';
    @Input() maxWidth: '20rem' | '30rem' | '40rem' | undefined = undefined;

    constructor(private router: Router) { }

    openUrl(url: string | undefined): void {

        if (!url) {
            return;
        }

        if (url.startsWith('http')) {
            window.open(url);
        } else {
            this.router.navigate([url]);
        }

    }

    getImageCssClass(item: GridItem): string {

        let str = '';

        if (item.imageRounded) {
            str += 'rounded-circle';
        }

        if (item.imageBorder) {
            str += ' border';
        }

        if (item.url) {
            str += ' url';
        }

        return str;

    }

}
