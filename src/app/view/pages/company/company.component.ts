import { Component, OnInit } from '@angular/core';

import { GridItem } from '../../components/grid/grid.component';

@Component({
    selector: 'app-company',
    templateUrl: './company.component.html',
    styleUrls: ['./company.component.scss'],
})
export class CompanyComponent implements OnInit {

    customersData: GridItem[] = [{
        colCssClass: 'col-lg-3 col-md-4 col-sm-6',
        imageSrc: 'assets/customers/kanton_aargau.png',
        imageBorder: true,
        imageRounded: true,
        imagePadding: '0 30px',
        title: 'Kanton Aargau',
    }, {
        colCssClass: 'col-lg-3 col-md-4 col-sm-6',
        imageSrc: 'assets/customers/kanton_basel-landschaft.png',
        imageBorder: true,
        imageRounded: true,
        imagePadding: '0 30px',
        title: 'Kanton Basel-Landschaft',
    }, {
        colCssClass: 'col-lg-3 col-md-4 col-sm-6',
        imageSrc: 'assets/customers/kanton_basel-stadt.png',
        imageBorder: true,
        imageRounded: true,
        imagePadding: '0 30px',
        title: 'Kanton Basel-Stadt',
    }, {
        colCssClass: 'col-lg-3 col-md-4 col-sm-6',
        imageSrc: 'assets/customers/kanton_schaffhausen.png',
        imageBorder: true,
        imageRounded: true,
        imagePadding: '0 30px',
        title: 'Kanton Schaffhausen',
    }, {
        colCssClass: 'col-lg-3 col-md-4 col-sm-6',
        imageSrc: 'assets/customers/bz-basel.png',
        imageBorder: true,
        imageRounded: true,
        imagePadding: '0 30px',
        title: 'bz Basel',
    }, {
        colCssClass: 'col-lg-3 col-md-4 col-sm-6',
        imageSrc: 'assets/customers/das-team.png',
        imageBorder: true,
        imageRounded: true,
        imagePadding: '0 30px',
        title: 'das team',
    }, {
        colCssClass: 'col-lg-3 col-md-4 col-sm-6',
        imageSrc: 'assets/customers/fc-basel.png',
        imageBorder: true,
        imageRounded: true,
        imagePadding: '0 30px',
        title: 'FC Basel 1893',
    }, {
        colCssClass: 'col-lg-3 col-md-4 col-sm-6',
        imageSrc: 'assets/customers/nexirius.png',
        imageBorder: true,
        imageRounded: true,
        imagePadding: '0 30px',
        title: 'Nexirius',
    }, {
        colCssClass: 'col-lg-3 col-md-4 col-sm-6',
        imageSrc: 'assets/customers/orpheus-reisen.png',
        imageBorder: true,
        imageRounded: true,
        imagePadding: '0 30px',
        title: 'Orpheus-Reisen',
    }, {
        colCssClass: 'col-lg-3 col-md-4 col-sm-6',
        imageSrc: 'assets/customers/otb-applications.png',
        imageBorder: true,
        imageRounded: true,
        imagePadding: '0 30px',
        title: 'OTB Applications',
    }, {
        colCssClass: 'col-lg-3 col-md-4 col-sm-6',
        imageSrc: 'assets/customers/st-jakob-park.png',
        imageBorder: true,
        imageRounded: true,
        imagePadding: '0 30px',
        title: 'Shopping Center St. Jakob-Park',
    }, {
        colCssClass: 'col-lg-3 col-md-4 col-sm-6',
        imageSrc: 'assets/customers/universitaet-basel.png',
        imageBorder: true,
        imageRounded: true,
        imagePadding: '0 30px',
        title: 'Universität Basel',
    }];

    partnersData: GridItem[] = [{
        colCssClass: 'offset-lg-3 col-lg-3 offset-md-2 col-md-4 col-sm-6',
        imageSrc: 'assets/partners/nexirius.png',
        imageBorder: true,
        imageRounded: true,
        title: 'Nexirius GmbH',
        text: 'Software-Firma mit über 25 Jahren Erfahrung.',
    }, {
        colCssClass: 'col-lg-3 col-md-4 col-sm-6',
        imageSrc: 'assets/partners/otb-applications.png',
        imageBorder: true,
        imageRounded: true,
        title: 'OTB Applications',
        text: 'Distributionspartner von SafeLog für Kitas, Schulen, Heime usw.',
    }];

    constructor() { }

    ngOnInit(): void {
    }

}
