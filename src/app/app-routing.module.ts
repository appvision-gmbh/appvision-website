import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CompanyComponent } from './view/pages/company/company.component';
import { HomeComponent } from './view/pages/home/home.component';
import { ProductsComponent } from './view/pages/products/products.component';
import { ServicesComponent } from './view/pages/services/services.component';

const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'products', component: ProductsComponent},
    {path: 'company', component: CompanyComponent},
    {path: 'services', component: ServicesComponent},
    {path: '**', redirectTo: ''},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
