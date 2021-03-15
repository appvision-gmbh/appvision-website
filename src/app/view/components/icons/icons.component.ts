import { Component, Input, OnInit } from '@angular/core';

export type IconsData = {
    imageSrc: string,
    rounded?: boolean,
    title?: string,
    text?: string,
};

@Component({
    selector: 'app-icons[data]',
    templateUrl: './icons.component.html',
    styleUrls: ['./icons.component.scss'],
})
export class IconsComponent implements OnInit {

    @Input() data: IconsData[] = [];
    @Input() grayscale = false;
    @Input() size: 'sm' | 'lg' = 'lg';
    @Input() border = 'border';

    constructor() { }

    ngOnInit(): void {
    }

}
