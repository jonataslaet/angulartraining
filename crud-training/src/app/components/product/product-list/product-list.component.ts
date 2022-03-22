import { Component, OnInit } from '@angular/core';
import { Product } from '../product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: Product[] = [{name: "Kurama", price: 2.0}, {name: "Kyuubi", price: 3.0}];

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.readAll().subscribe(prods => {      
      this.products = prods;
      console.log("Inside subscribe: " + prods);
    })
  }

}
