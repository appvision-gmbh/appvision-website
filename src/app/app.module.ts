import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbCollapseModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './view/components/footer/footer.component';
import { HomeComponent } from './view/pages/home/home.component';
import { MenuComponent } from './view/components/menu/menu.component';
import { ProductsComponent } from './view/pages/products/products.component';
import { CompanyComponent } from './view/pages/company/company.component';
import { ServicesComponent } from './view/pages/services/services.component';
import { GridComponent } from './view/components/grid/grid.component';

@NgModule({
    declarations: [
        AppComponent,
        MenuComponent,
        HomeComponent,
        FooterComponent,
        ProductsComponent,
        CompanyComponent,
        ServicesComponent,
        GridComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        NgbCollapseModule,
        NgbModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
