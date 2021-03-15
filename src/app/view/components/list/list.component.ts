import { Component, Input, OnInit } from '@angular/core';

export type ListItem = {
    ionicon?: string,
    imageSrc?: string,
    text: string,
};

@Component({
    selector: 'app-list[items]',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {

    @Input() items: ListItem[] = [];
    @Input() width = '30rem';

    constructor() { }

    ngOnInit(): void {
    }

}
