import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListProductComponent } from './UI/view-models/product/list-product/list-product.component';
import { AddProductComponent } from './UI/view-models/product/add-product/add-product.component';
import { EditProductComponent } from './UI/view-models/product/edit-product/edit-product.component';

const routes: Routes = [
  {path:'',pathMatch:'full',redirectTo:'list-product'},
  {path:'list-product', component:ListProductComponent},
  {path:'add-product', component:AddProductComponent},
  {path:'edit-product/:id', component:EditProductComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
