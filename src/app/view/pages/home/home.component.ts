import { Component } from '@angular/core';

import { GridItem } from '../../components/grid/grid.component';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    standalone: false,
})
export class HomeComponent {

    welcomeItems: GridItem[] = [{
        icon: 'phone',
        imageRounded: true,
        title: 'App',
        text: 'Das Wort «App» in unserem Namen steht stellvertretend für unsere grosse Erfahrung in der Konzeption und Entwicklung von' +
            ' mobilen Applikationen, Webapplikationen und Software. ',
    }, {
        icon: 'eye',
        imageRounded: true,
        title: 'Vision',
        text: 'Wir unterstützen Sie, Ihre «Vision» in die Realität umzusetzen. Mithilfe unseres fundierten Know-hows in' +
            ' zukunftsorientierten Technologien entwickeln wir Ihr Wunschprojekt professionell und effizient.',
    }, {
        icon: 'briefcase',
        imageRounded: true,
        title: 'GmbH',
        text: 'Unser Unternehmen mit Sitz in Reinach BL steht Ihnen zur Verfügung. Gerne beraten wir Sie persönlich und' +
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
        text: 'AppVision bietet in den Bereichen Informationstechnologie und Naturwissenschaften verschiedene Dienstleistungen an. Wir' +
            ' sind spezialisiert auf die Entwicklung von Webapplikationen und nativen Apps für iOS/Android.',
        url: 'services',
        urlText: 'Mehr dazu',
    }];

}
