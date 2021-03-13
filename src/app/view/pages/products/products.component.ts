import { Component, OnInit } from '@angular/core';
import { ListItem } from '../../components/list/list.component';

@Component({
    selector: 'app-products',
    templateUrl: './products.component.html',
    styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {

    readonly features: ListItem[] = [{
        imageSrc: 'assets/products/safelog/swiss-flag-outline.png',
        text: 'SafeLog wurde von AppVision in der Schweiz entwickelt und mit Experten für das Case Management optimiert.',
    }, {
        ionicon: 'laptop-outline',
        text: 'Alle Funktionen sind an jedem beliebigem Standort mit einem interneFähigen Gerät über den Browser verfügbar.',
    }, {
        ionicon: 'people-outline',
        text: 'Angenehmer Arbeitseinstieg dank einer übersichtlichen Darstellung aller erfassten Personen, Fälle und einzelner Dossiers.',
    }, {
        ionicon: 'search-outline',
        text: 'Eine intelligente Filtersuche erlaubt es, präzise und blitzschnell nach Inhalten zu suchen.',
    }, {
        ionicon: 'person-outline',
        text: 'Falldossiers zeigen alle relevanten Daten auf einen Blick. Eine chronologische Timeline zeigt alle erfassten Ereignisse.',
    }, {
        ionicon: 'stats-chart-outline',
        text: 'Per Knopfdruck können zu jeder beliebigen Zeitspanne Statistiken mit attraktiven Grafiken und Tabellen erstellt werden.',
    }, {
        ionicon: 'settings-outline',
        text: 'SafeLog lässt sich den Bedürfnissen anpassen. Weitere Module werden von AppVision offeriert und implementiert.',
    }, {
        ionicon: 'server-outline',
        text: 'Alle Daten werden in einem zertifizierten Schweizer Datencenter gespeichert. Der Betrieb erfolgt mit erneuerbarer Energie.',
    }, {
        ionicon: 'shield-checkmark-outline',
        text: 'Sämtliche Verbindungen zu SafeLog sind verschlüsselt. Ein optionales zweistufiges Login per SMS sorgt für höchste' +
            ' Sicherheit.',
    }];

    constructor() { }

    ngOnInit(): void {
    }

}
