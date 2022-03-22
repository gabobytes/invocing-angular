import { ClientApiService } from './Infrastructure/driven-adapter/client-api/client-api.service';
import { ClientGateway } from 'src/app/Domain/Models/Client/Gateway/client-gateway';
import { ProductGateway } from 'src/app/Domain/Models/Product/Gateway/product-gateway';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductApiService } from './Infrastructure/driven-adapter/product-api/product-api-service';
import { ProductComponent } from './UI/view-models/product/product.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ListProductComponent } from './UI/view-models/product/list-product/list-product.component';
import { AddProductComponent } from './UI/view-models/product/add-product/add-product.component';
import { EditProductComponent } from './UI/view-models/product/edit-product/edit-product.component';



@NgModule({
  declarations: [
    AppComponent,    
    ProductComponent, ListProductComponent, AddProductComponent, EditProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [{provide: ProductGateway, useClass:ProductApiService },
    {provide:ClientGateway,useClass:ClientApiService}
  ]
  
  
  ,
  bootstrap: [AppComponent]
})
export class AppModule { }
