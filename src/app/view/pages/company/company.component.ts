import { Component, OnInit } from '@angular/core';

import { IconsData } from '../../components/icons/icons.component';

@Component({
    selector: 'app-company',
    templateUrl: './company.component.html',
    styleUrls: ['./company.component.scss'],
})
export class CompanyComponent implements OnInit {

    customersData: IconsData[] = [{
        imageSrc: 'assets/customers/kanton_aargau.png',
        rounded: true,
        title: 'Kanton Aargau',
    }, {
        imageSrc: 'assets/customers/kanton_basel-landschaft.png',
        rounded: true,
        title: 'Kanton Basel-Landschaft',
    }, {
        imageSrc: 'assets/customers/kanton_basel-stadt.png',
        rounded: true,
        title: 'Kanton Basel-Stadt',
    }, {
        imageSrc: 'assets/customers/kanton_schaffhausen.png',
        rounded: true,
        title: 'Kanton Schaffhausen',
    }, {
        imageSrc: 'assets/customers/bz-basel.png',
        rounded: true,
        title: 'bz Basel',
    }, {
        imageSrc: 'assets/customers/das-team.png',
        rounded: true,
        title: 'das team',
    }, {
        imageSrc: 'assets/customers/fc-basel.png',
        rounded: true,
        title: 'FC Basel 1893',
    }, {
        imageSrc: 'assets/customers/nexirius.png',
        rounded: true,
        title: 'Nexirius',
    }, {
        imageSrc: 'assets/customers/orpheus-reisen.png',
        rounded: true,
        title: 'Orpheus-Reisen',
    }, {
        imageSrc: 'assets/customers/otb-applications.png',
        rounded: true,
        title: 'OTB Applications',
    }, {
        imageSrc: 'assets/customers/st-jakob-park.png',
        rounded: true,
        title: 'Shopping Center St. Jakob-Park',
    }, {
        imageSrc: 'assets/customers/universitaet-basel.png',
        rounded: true,
        title: 'Universität Basel',
    }];

    partnersData: IconsData[] = [{
        imageSrc: 'assets/partners/nexirius.png',
        rounded: true,
        title: 'Nexirius GmbH',
        text: 'Software-Firma mit über 25 Jahren Erfahrung.',
    }, {
        imageSrc: 'assets/partners/otb-applications.png',
        rounded: true,
        title: 'OTB Applications',
        text: 'Distributionspartner von SafeLog für Kitas, Schulen, Heimen, usw.',
    }];

    constructor() { }

    ngOnInit(): void {
    }

    openGoogleMaps(): void {
        window.open('https://www.google.com/maps/place/AppVision+GmbH/@47.4887406,7.5993231,15z/data=!4m5!3m4!1s0x0:0xf3912539f26d6ab4!8m2!3d47.4886888!4d7.5993087');
    }

}
