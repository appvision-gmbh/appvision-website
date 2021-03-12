import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { HomeComponent } from "./view/home/home.component";
import { ProductsComponent } from "./view/products/products.component";

const routes: Routes = [
    {path: "", component: HomeComponent},
    {path: "products", component: ProductsComponent},
    {path: "**", redirectTo: ""}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
