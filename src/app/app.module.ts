import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './view/footer/footer.component';
import { HomeComponent } from './view/home/home.component';
import { MenuComponent } from './view/menu/menu.component';
import { ProductsComponent } from './view/products/products.component';

@NgModule({
    declarations: [
        AppComponent,
        MenuComponent,
        HomeComponent,
        FooterComponent,
        ProductsComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        NgbCollapseModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
