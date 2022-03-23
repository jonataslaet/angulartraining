import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './components/product/product-list/product-list.component';
import { ProductUpdateComponent } from './components/product/product-update/product-update.component';

const routes: Routes = [
  {
    path: "",
    pathMatch: 'full',
    redirectTo: 'products'
  },
  {
    path: "products",
    component: ProductListComponent
  },
  {
    path: "products/update/:id",
    component: ProductUpdateComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
