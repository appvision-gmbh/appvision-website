import { Component, OnInit } from '@angular/core';
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
        text: '<strong>Vision</strong>: Wir unterstützen Sie dabei, Ihre «Vision» in die Realität umzusetzen. Mithilfe unseres' +
            ' fundierten Know-hows in verschiedensten Technologien entwickeln wir Ihr Wunschprojekt professionell und effizient.',
    }, {
        ionicon: 'mail-outline',
        text: '<strong>Kontakt</strong>: Unser Unternehmen mit Sitz in Reinach BL steht Ihnen gerne zur Verfügung. Gerne beraten wir Sie' +
            ' persönlich und unverbindlich per Telefon, E-Mail oder bei Ihnen vor Ort.',
    }];

    constructor() { }

    ngOnInit(): void {
    }

}
