import { Component, OnInit } from '@angular/core';
import { IconsData } from '../../components/icons/icons.component';
import { ListItem } from '../../components/list/list.component';

@Component({
    selector: 'app-services',
    templateUrl: './services.component.html',
    styleUrls: ['./services.component.scss'],
})
export class ServicesComponent implements OnInit {

    technologies: IconsData[] = [
        {imageSrc: 'assets/services/technologies/angular.png', rounded: false},
        {imageSrc: 'assets/services/technologies/c-sharp.png', rounded: false},
        {imageSrc: 'assets/services/technologies/css.png', rounded: false},
        {imageSrc: 'assets/services/technologies/html5.png', rounded: false},
        {imageSrc: 'assets/services/technologies/java.png', rounded: false},
        {imageSrc: 'assets/services/technologies/javascript.png', rounded: false},
        {imageSrc: 'assets/services/technologies/matlab.png', rounded: false},
        {imageSrc: 'assets/services/technologies/mysql.png', rounded: false},
        {imageSrc: 'assets/services/technologies/php.png', rounded: false},
        {imageSrc: 'assets/services/technologies/sql.png', rounded: false},
        {imageSrc: 'assets/services/technologies/swift.png', rounded: false},
        {imageSrc: 'assets/services/technologies/typescript.png', rounded: false},
    ];
    services: ListItem[] = [
        {
            imageSrc: 'assets/safelog/logo.png',
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

    constructor() { }

    ngOnInit(): void {
    }

}
