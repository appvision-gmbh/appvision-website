import { Component, OnInit } from '@angular/core';

import { GridItem } from '../../components/grid/grid.component';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

    welcomeItems: GridItem[] = [{
        ionicon: 'phone-portrait-outline',
        imageRounded: true,
        title: 'App',
        text: 'Das Wort «App» in unserem Namen steht für unsere grosse Erfahrung in der Konzeption und Entwicklung von mobilen' +
            ' Applikationen, Webapplikationen und Software. ',
    }, {
        ionicon: 'eye-outline',
        imageRounded: true,
        title: 'Vision',
        text: 'Wir unterstützen Sie, Ihre «Vision» in die Realität umzusetzen. Mithilfe unseres fundierten Know-hows in verschiedensten' +
            ' Technologien entwickeln wir Ihr Wunschprojekt professionell und effizient.',
    }, {
        ionicon: 'briefcase-outline',
        imageRounded: true,
        title: 'GmbH',
        text: 'Unser Unternehmen mit Sitz in Reinach BL steht Ihnen gerne zur Verfügung. Gerne beraten wir Sie persönlich und' +
            ' unverbindlich per Telefon, E-Mail oder bei Ihnen vor Ort.',
    }];

    offersData: GridItem[] = [{
        colCssClass: 'col-lg-6 col-md-12',
        imageSrc: 'assets/safelog.png',
        imagePadding: '0 30px',
        title: 'SafeLog',
        text: 'SafeLog ist eine moderne Webapplikation für Ihr Case Management. Die Applikation wurde von AppVision entwickelt' +
            ' und gemeinsam mit Experten optimiert. Sie ist seit mehreren Jahren bei verschiedenen Institutionen erfolgreich im Einsatz.',
        url: 'safelog',
        urlText: 'Mehr dazu',
    }, {
        colCssClass: 'col-lg-6 col-md-12',
        imageSrc: 'assets/services.png',
        imagePadding: '0 30px',
        title: 'Dienstleistungen',
        text: 'AppVision bietet im Bereich Informationstechnologie und Naturwissenschaften verschiedene Dienstleistungen an. Wir sind' +
            ' spezialisiert auf die Entwicklung von Webapplikationen und nativen Apps für iOS/Android.',
        url: 'services',
        urlText: 'Mehr dazu',
    }];

    constructor() { }

    ngOnInit(): void {
    }

}
