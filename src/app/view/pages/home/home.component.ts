import { Component, OnInit } from '@angular/core';
import { IconsData } from '../../components/icons/icons.component';
import { ListItem } from '../../components/list/list.component';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

    welcomeItems: ListItem[] = [{
        ionicon: 'phone-portrait-outline',
        text: '<strong>App</strong>: Das Wort «App» in unserem Namen steht für unsere grosse Erfahrung in der Konzeption und Entwicklung' +
            ' von mobilen Applikationen, Webapplikationen und Software. ',
    }, {
        ionicon: 'eye-outline',
        text: '<strong>Vision</strong>: Wir unterstützen Sie, Ihre «Vision» in die Realität umzusetzen. Mithilfe unseres' +
            ' fundierten Know-hows in verschiedensten Technologien entwickeln wir Ihr Wunschprojekt professionell und effizient.',
    }, {
        ionicon: 'briefcase-outline',
        text: '<strong>GmbH</strong>: Unser Unternehmen mit Sitz in Reinach BL steht Ihnen gerne zur Verfügung. Gerne beraten wir Sie' +
            ' persönlich und unverbindlich per Telefon, E-Mail oder bei Ihnen vor Ort.',
    }];

    offersData: IconsData[] = [{
        imageSrc: 'assets/safelog.png',
        title: 'SafeLog',
        text: 'SafeLog ist eine moderne Webapplikation für Ihr Case Management. Die Applikation wurde von AppVision entwickelt' +
            ' und gemeinsam mit Experten optimiert. Sie ist seit mehreren Jahren bei verschiedenen Institutionen erfolgreich im Einsatz.',
        link: 'safelog',
        linkText: 'Mehr dazu',
    }, {
        imageSrc: 'assets/services.png',
        title: 'Dienstleistungen',
        text: 'AppVision bietet im Bereich Informationstechnologie und Naturwissenschaften verschiedene Dienstleistungen an. Wir sind' +
            ' spezialisiert auf die Entwicklung von Webapplikationen und nativen Apps für iOS/Android.',
        link: 'services',
        linkText: 'Mehr dazu',
    }];

    constructor() { }

    ngOnInit(): void {
    }

}
