import { Component, OnInit } from '@angular/core';

import { IconsData } from '../../components/icons/icons.component';

@Component({
    selector: 'app-company',
    templateUrl: './company.component.html',
    styleUrls: ['./company.component.scss'],
})
export class CompanyComponent implements OnInit {

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
    }, {
        imageSrc: 'assets/partners/nexirius.jpg',
        rounded: true,
    }];

    constructor() { }

    ngOnInit(): void {
    }

}
