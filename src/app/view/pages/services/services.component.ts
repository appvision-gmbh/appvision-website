import { Component, OnInit } from '@angular/core';

import { GridItem } from '../../components/grid/grid.component';

@Component({
    selector: 'app-services',
    templateUrl: './services.component.html',
    styleUrls: ['./services.component.scss'],
    standalone: false
})
export class ServicesComponent implements OnInit {

    services: GridItem[] = [
        {
            imageSrc: 'assets/logo-safelog.png',
            imageRounded: true,
            title: 'SafeLog',
            text: 'SafeLog ist eine moderne Webapplikation für Ihr Case Management. AppVision offeriert umfangreiche Dienstleistungen' +
                ' rund um Ihre Bedürfnisse zu SafeLog.',
        },
        {
            icon: 'code',
            imageRounded: true,
            title: 'Software',
            text: 'Dank unserer langjährigen Expertise in der Software-Architektur und -Entwicklung setzen wir Ihr Projekt effizient' +
                ' um. Wir sind spezialisiert auf Apps und moderne Webtechnologien.',
        },
        {
            icon: 'database',
            imageRounded: true,
            title: 'Hosting',
            text: 'Wir geben Ihrem Webprojekt ein Zuhause. Im zertifizierten Datencenter der Industriellen Werke Basel (IWB) betreiben' +
                ' wir eine eigene Server-Infrastruktur.',
        },
        {
            icon: 'lightbulb',
            imageRounded: true,
            title: 'Consulting',
            text: 'Wir analysieren Ihre Bedürfnisse, um eine bestmögliche Lösung für Ihr Projekt zu definieren. Wir unterstützen Sie bei' +
                ' der Evaluation, Architektur oder Entwicklung von Software.',
        },
    ];

    projects: GridItem[] = [
        {
            colCssClass: 'col-lg-3 col-md-4 col-sm-6',
            imageSrc: 'assets/projects/das-team.png',
            imageBorder: true,
            imagePadding: '0 30px',
            title: 'Das-Team-App',
            text: 'Zu einer vom Kunden vordefinierten API entwickelten wir eine native App für iOS und Android.',
            url: 'https://team.jobs',
        },
        {
            colCssClass: 'col-lg-3 col-md-4 col-sm-6',
            imageSrc: 'assets/projects/rotblau.png',
            imageBorder: true,
            imagePadding: '0 30px',
            title: 'Rotblau-App',
            text: 'Die von uns entwickelte Rotblau-App ist mit über 110\'000 Downloads eine der beliebtesten Apps der Schweiz.',
            url: 'https://about.rotblau.app',
        },
        {
            colCssClass: 'col-lg-3 col-md-4 col-sm-6',
            imageSrc: 'assets/projects/st-jakob-park.png',
            imageBorder: true,
            imagePadding: '0 30px',
            title: 'Shopping Center',
            text: 'Für das Shopping Center St. Jakob-Park implementierten wir eine Bestellplattform mit Bezahlungssystem.',
            url: 'https://gutscheine.st-jakob-park.com/order/',
        },
        {
            colCssClass: 'col-lg-3 col-md-4 col-sm-6',
            imageSrc: 'assets/projects/wegweiser.png',
            imageBorder: true,
            imagePadding: '0 30px',
            title: 'Wegweiser',
            text: 'Als Safelog-Modul entwickelten wir für den Kanton Aargau die Plattform «Wegweiser» für die schulischen Brückenangebote.',
            url: 'https://wegweiser.online',
        },
    ];

    technologies: GridItem[] = [
        {imageSrc: 'assets/technologies/angular.png', imageBorder: true},
        {imageSrc: 'assets/technologies/bootstrap.png', imageBorder: true},
        {imageSrc: 'assets/technologies/c-sharp.png', imageBorder: true},
        {imageSrc: 'assets/technologies/css.png', imageBorder: true},
        {imageSrc: 'assets/technologies/docker.png', imageBorder: true},
        {imageSrc: 'assets/technologies/github.png', imageBorder: true},
        {imageSrc: 'assets/technologies/html.png', imageBorder: true},
        {imageSrc: 'assets/technologies/ionic.png', imageBorder: true},
        {imageSrc: 'assets/technologies/java.png', imageBorder: true},
        {imageSrc: 'assets/technologies/javascript.png', imageBorder: true},
        {imageSrc: 'assets/technologies/mariadb.png', imageBorder: true},
        {imageSrc: 'assets/technologies/matlab.png', imageBorder: true},
        {imageSrc: 'assets/technologies/node-js.png', imageBorder: true},
        {imageSrc: 'assets/technologies/php.png', imageBorder: true},
        {imageSrc: 'assets/technologies/python.png', imageBorder: true},
        {imageSrc: 'assets/technologies/sql.png', imageBorder: true},
        {imageSrc: 'assets/technologies/swift.png', imageBorder: true},
        {imageSrc: 'assets/technologies/typescript.png', imageBorder: true},
    ];

    constructor() { }

    ngOnInit(): void {
    }

}
