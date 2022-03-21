import { ProductUseCases } from './../../../Domain/usecase/product-use-case';
import { Component, OnInit } from '@angular/core';
import { throws } from 'assert';

@Component({
  providers: [],
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(private _getProductUseCase: ProductUseCases) { }
  response$;
  datos$;


  ngOnInit(): void {
    this.response$ = this._getProductUseCase.getProducts();
    this.response$.subscribe(
      (data) =>{
        this.datos$ =data;
      }
    );
  }

}
