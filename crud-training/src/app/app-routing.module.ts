import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductCreateComponent } from './components/product/product-create/product-create.component';
import { ProductDeleteComponent } from './components/product/product-delete/product-delete.component';
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
    path: "products/create",
    component: ProductCreateComponent
  },
  {
    path: "products/update/:id",
    component: ProductUpdateComponent
  },
  {
    path: "products/delete/:id",
    component: ProductDeleteComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
