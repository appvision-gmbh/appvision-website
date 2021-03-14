import { Component, OnInit } from '@angular/core';

import { IconsData } from '../../components/icons/icons.component';

@Component({
    selector: 'app-company',
    templateUrl: './company.component.html',
    styleUrls: ['./company.component.scss'],
})
export class CompanyComponent implements OnInit {

    customersData: IconsData[] = [{
        imageSrc: 'assets/customers/kanton_aargau.jpg',
        rounded: true,
        title: 'Kanton Aargau',
    }, {
        imageSrc: 'assets/customers/kanton_basel-landschaft.jpg',
        rounded: true,
        title: 'Kanton Basel-Landschaft',
    }, {
        imageSrc: 'assets/customers/kanton_basel-stadt.jpg',
        rounded: true,
        title: 'Kanton Basel-Stadt',
    }, {
        imageSrc: 'assets/customers/kanton_schaffhausen.jpg',
        rounded: true,
        title: 'Kanton Schaffhausen',
    }, {
        imageSrc: 'assets/customers/bz-basel.jpg',
        rounded: true,
        title: 'bz Basel',
    }, {
        imageSrc: 'assets/customers/das-team.jpg',
        rounded: true,
        title: 'das team',
    }, {
        imageSrc: 'assets/customers/fc-basel.jpg',
        rounded: true,
        title: 'FC Basel 1893',
    }, {
        imageSrc: 'assets/customers/nexirius.jpg',
        rounded: true,
        title: 'Nexirius',
    }, {
        imageSrc: 'assets/customers/orpheus-reisen.jpg',
        rounded: true,
        title: 'Orpheus-Reisen',
    }, {
        imageSrc: 'assets/customers/otb-applications.jpg',
        rounded: true,
        title: 'OTB Applications',
    }, {
        imageSrc: 'assets/customers/shopping-center-st-jakob-park.jpg',
        rounded: true,
        title: 'Shopping Center St. Jakob-Park',
    }, {
        imageSrc: 'assets/customers/universitaet-basel.jpg',
        rounded: true,
        title: 'Universität Basel',
    }];

    partnersData: IconsData[] = [{
        imageSrc: 'assets/partners/nexirius.jpg',
        rounded: true,
        title: 'Nexirius GmbH',
        text: 'Software-Firma mit über 25 Jahren Erfahrung.',
    }, {
        imageSrc: 'assets/partners/otb.jpg',
        rounded: true,
        title: 'OTB Applications',
        text: 'Distributionspartner von SafeLog für Kitas, Schulen, Heimen, usw.',
    }];

    constructor() { }

    ngOnInit(): void {
    }

}
