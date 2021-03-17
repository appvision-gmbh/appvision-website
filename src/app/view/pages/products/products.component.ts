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

    images = [1, 2, 3, 4, 5, 6, 7, 8, 10].map(i => 'assets/products/safelog/showcase' + '' + '.png');

    constructor() { }

    ngOnInit(): void {
    }

}
