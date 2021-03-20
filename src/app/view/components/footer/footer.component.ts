import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }

    openGoogleMaps(): void {
        window.open('https://www.google.com/maps/place/AppVision+GmbH/@47.4887406,7.5993231,15z/data=!4m5!3m4!1s0x0:0xf3912539f26d6ab4!8m2!3d47.4886888!4d7.5993087');
    }

    getYear(): number {
        const d = new Date();
        return d.getFullYear();
    }

}
