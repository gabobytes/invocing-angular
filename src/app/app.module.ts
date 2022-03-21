import { ProductGateway } from 'src/app/Domain/Models/Product/Gateway/product-gateway';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductApiService } from './Infrastructure/driven-adapter/product-api/product-api-service/product-api-service.';
import { ProductComponent } from './UI/view-models/product/product.component';


@NgModule({
  declarations: [
    AppComponent,    
    ProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [{provide: ProductGateway, useClass:ProductApiService }],
  bootstrap: [AppComponent]
})
export class AppModule { }
