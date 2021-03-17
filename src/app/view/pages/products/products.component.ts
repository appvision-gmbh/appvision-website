import { Component, OnInit } from '@angular/core';

import { GridItem } from '../../components/grid/grid.component';

@Component({
    selector: 'app-products',
    templateUrl: './products.component.html',
    styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {

    readonly features: GridItem[] = [{
        imageSrc: 'assets/products/safelog/swiss-flag-outline.png',
        imageRounded: true,
        text: 'SafeLog wurde von AppVision in der Schweiz entwickelt und mit Experten für das Case Management optimiert.',
    }, {
        ionicon: 'laptop-outline',
        imageRounded: true,
        text: 'Alle Funktionen sind an jedem beliebigem Standort mit einem internernetfähigen Gerät über den Browser verfügbar.',
    }, {
        ionicon: 'people-outline',
        imageRounded: true,
        text: 'Angenehmer Arbeitseinstieg dank einer übersichtlichen Darstellung aller erfassten Personen, Fälle und einzelner Dossiers.',
    }, {
        ionicon: 'search-outline',
        imageRounded: true,
        text: 'Eine intelligente Filtersuche erlaubt es, präzise und blitzschnell nach Inhalten zu suchen.',
    }, {
        ionicon: 'person-outline',
        imageRounded: true,
        text: 'Falldossiers zeigen alle relevanten Daten auf einen Blick. Eine chronologische Timeline zeigt alle erfassten Ereignisse.',
    }, {
        ionicon: 'stats-chart-outline',
        imageRounded: true,
        text: 'Per Knopfdruck können zu jeder beliebigen Zeitspanne Statistiken mit attraktiven Grafiken und Tabellen erstellt werden.',
    }, {
        ionicon: 'settings-outline',
        imageRounded: true,
        text: 'SafeLog lässt sich den Bedürfnissen anpassen. Weitere Module werden von AppVision offeriert und implementiert.',
    }, {
        ionicon: 'server-outline',
        imageRounded: true,
        text: 'Alle Daten werden in einem zertifizierten Schweizer Datencenter gespeichert. Der Betrieb erfolgt mit erneuerbarer Energie.',
    }, {
        ionicon: 'shield-checkmark-outline',
        imageRounded: true,
        text: 'Sämtliche Verbindungen zu SafeLog sind verschlüsselt. Ein optionales zweistufiges Login per SMS sorgt für höchste' +
            ' Sicherheit.',
    }];

    images: { url: string, title: string, text: string }[] = [{
        url: 'assets/products/safelog/showcase.png',
        title: 'a',
        text: 'b',
    }, {
        url: 'assets/products/safelog/showcase.png',
        title: 'a',
        text: 'b',
    }];

    clients: GridItem[] = [{
        colCssClass: 'offset-lg-2 col-lg-4 col-md-6',
        imageSrc: 'assets/customers/kanton_aargau.png',
        imageRounded: true,
        imageBorder: true,
        imagePadding: '0 10%',
        title: 'Fachstelle Nahtstelle 1',
        text: '«SafeLog ist das optimale Instrument, damit der Fokus auf dem Klienten liegt und nicht auf der Falladministration.' +
            ' SafeLog besticht durch seine Benutzerfreundlichkeit und das Design.»',
    }, {
        colCssClass: 'col-lg-4 col-md-6',
        imageRounded: true,
        imageBorder: true,
        imagePadding: '0 10%',
        imageSrc: 'assets/customers/kanton_basel-landschaft.png',
        title: 'Berufsintegration Basel-Landschaft',
        text: '«Mit SafeLog ist unsere Falldokumentation bedeutend einfacher und konsistenter geworden. Dank individuellen Anpassungen' +
            ' ist SafeLog genau auf die Bedürfnisse unserer Stelle zugeschnitten!',
    }];

    switch: GridItem[] = [{
        imageText: '1',
        imageRounded: true,
        title: 'Beratung',
        text: 'Kontaktieren Sie uns für eine umfangreiche Produktberatung. Wir klären mit Ihnen Ihre Anforderungen an SafeLog und zeigen' +
            ' Ihnen in einer Demo die Möglichkeiten auf.',
    }, {
        imageText: '2',
        imageRounded: true,
        title: 'Einmalige Arbeiten',
        text: 'Wenn Sie SafeLog erweitern lassen möchten, offerieren wir Ihnen diese einmaligen Leistungen im Voraus. Falls technisch' +
            ' möglich, migrieren wir Ihre Daten von Ihrem alten System.',
    }, {
        imageText: '3',
        imageRounded: true,
        title: 'Servicevertrag',
        text: 'Wir schliessen mit Ihnen einen Servicevertrag ab, der Lizenz, Betrieb und Support von SafeLog beinhaltet. Bei uns gibt es' +
            ' keine versteckte Kosten, alles ist inklusive.',
    }, {
        imageText: '4',
        imageRounded: true,
        title: 'Loslegen',
        text: 'Nun sind Sie bereit für SafeLog und können loslegen! Auf Anfrage bieten wir Ihnen einen kostenlosen Schulungstag vor Ort' +
            ' an.',
    }];

    constructor() { }

    ngOnInit(): void {
    }

}
