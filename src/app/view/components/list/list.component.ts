import { Component, Input, OnInit } from '@angular/core';

export type ListItem = {
    ionicon?: string,
    imageSrc?: string,
    text: string,
};

@Component({
    selector: 'app-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {

    @Input() items: ListItem[] = [];

    constructor() { }

    ngOnInit(): void {
    }

}
