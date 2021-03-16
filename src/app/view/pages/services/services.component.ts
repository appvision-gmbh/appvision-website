import { Component, OnInit } from '@angular/core';
import { IconsData } from '../../components/icons/icons.component';
import { ListItem } from '../../components/list/list.component';

@Component({
    selector: 'app-services',
    templateUrl: './services.component.html',
    styleUrls: ['./services.component.scss'],
})
export class ServicesComponent implements OnInit {

    services: ListItem[] = [
        {
            imageSrc: 'assets/logo-safelog.png',
            text: '<strong>SafeLog</strong>: SafeLog ist eine moderne Webapplikation für Ihr Case Management. AppVision offeriert' +
                ' umfangreiche Dienstleistungen rund um Ihre Bedürfnisse zu SafeLog.',
        },
        {
            ionicon: 'code-outline',
            text: '<strong>Software-Architektur</strong>: Dank unserer langjährigen Expertise in der Software-Architektur und' +
                ' -Entwicklung setzen wir Ihr Projekt effizient um. Wir sind spezialisiert auf mobile Apps und moderne Webtechnologien.',
        },
        {
            ionicon: 'server-outline',
            text: '<strong>Hosting</strong>: Wir geben Ihrem Webprojekt ein Zuhause. Im zertifizierten Datenzenter' +
                ' der Industriellen Werke Basel (IWB) betreiben wir eine eigene Server-Infrastruktur.',
        },
        {
            ionicon: 'help-outline',
            text: '<strong>Consulting</strong>: Wir analysieren Ihre Bedürfnisse, um eine bestmögliche Lösung für Ihr Projekt zu' +
                ' definieren. Wir unterstützen Sie bei der Evaluation, Architektur oder Entwicklung von Software.',
        },
    ];

    technologies: IconsData[] = [
        {imageSrc: 'assets/technologies/angular.png', rounded: false},
        {imageSrc: 'assets/technologies/bootstrap.png', rounded: false},
        {imageSrc: 'assets/technologies/c-sharp.png', rounded: false},
        {imageSrc: 'assets/technologies/css.png', rounded: false},
        {imageSrc: 'assets/technologies/docker.png', rounded: false},
        {imageSrc: 'assets/technologies/github.png', rounded: false},
        {imageSrc: 'assets/technologies/html.png', rounded: false},
        {imageSrc: 'assets/technologies/ionic.png', rounded: false},
        {imageSrc: 'assets/technologies/java.png', rounded: false},
        {imageSrc: 'assets/technologies/javascript.png', rounded: false},
        {imageSrc: 'assets/technologies/mariadb.png', rounded: false},
        {imageSrc: 'assets/technologies/matlab.png', rounded: false},
        {imageSrc: 'assets/technologies/node-js.png', rounded: false},
        {imageSrc: 'assets/technologies/php.png', rounded: false},
        {imageSrc: 'assets/technologies/python.png', rounded: false},
        {imageSrc: 'assets/technologies/sql.png', rounded: false},
        {imageSrc: 'assets/technologies/swift.png', rounded: false},
        {imageSrc: 'assets/technologies/typescript.png', rounded: false},
    ];

    projects: IconsData[] = [
        {
            imageSrc: 'assets/projects/das-team.png',
            rounded: false,
            title: 'Das-Team-App',
            text: 'Zu einer vom Kunden vordefinierten API entwickelten wir eine native App für iOS und Android.',
        },
        {
            imageSrc: 'assets/projects/rotblau.png',
            rounded: false,
            title: 'Rotblau-App',
            text: 'Die von uns entwickelte Rotblau-App ist mit über 110\'000 Downloads eine der beliebtesten Apps der Schweiz.',
        },
        {
            imageSrc: 'assets/projects/st-jakob-park.png',
            rounded: false,
            title: 'Shopping Center',
            text: 'Für das Shopping Center St. Jakob-Park implementierten wir eine Bestellplattform mit Bezahlungssystem.',
        },
        {
            imageSrc: 'assets/projects/wegweiser.png',
            rounded: false,
            title: 'Wegweiser',
            text: 'Als Safelog-Modul entwickelten wir für den Kanton Aargau die Plattform «Wegweiser» für die Brückenangebote nach dem' +
                ' 9. Schuljahr.',
        },
    ];

    constructor() { }

    ngOnInit(): void {
    }

}
