import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductApiService } from './Infrastructure/driven-adapter/product-api/product-api-service/product-api-service.';
import { ProductComponent } from './UI/view-models/product/product.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductApiService,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
