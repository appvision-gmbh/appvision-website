import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

export type GridItem = {
    // The column formatting
    colCssClass?: string,
    // Image
    imageSrc?: string, // use either imageSrc or ionicon
    ionicon?: string, // use either imageSrc or ionicon
    imageRounded?: boolean,
    imageBorder?: boolean,
    imagePadding?: string,
    // Text below / beside image
    title?: string,
    text?: string,
    // Url below text
    url?: string,
    urlText?: string,
};

@Component({
    selector: 'app-grid[items]',
    templateUrl: './grid.component.html',
    styleUrls: ['./grid.component.scss'],
})
export class GridComponent {

    @Input() items: GridItem[] = [];
    @Input() format: 'grid' | 'list' = 'list';
    @Input() maxWidth: '20rem' | '30rem' | '40rem' | undefined = undefined;

    constructor(private router: Router) { }

    openUrl(url: string): void {
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

        return str;

    }

}
