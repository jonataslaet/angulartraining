import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Product } from '../product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {

  product: Product;

  constructor(
    private productService: ProductService,
    private router: Router) { }

  ngOnInit(): void {
    
    const id = 1;//this.activatedRoute.snapshot.paramMap.get('id');
    console.log('called2...' + id);
    this.productService.readById(id+'').subscribe(prod => {
      console.log('called...');
      this.product = prod;
      //this.productService.showMessage('Produto carregado');
    })
  }

  updateProduct(): void {
    this.productService.update(this.product).subscribe(() => {
      this.productService.showMessage('Produto atualizado');
      this.router.navigate(['/products']);
    })
  }

}
