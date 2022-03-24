import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent implements OnInit {

  product: Product = {name: '', price: null};

  constructor(
    private activatedRoute: ActivatedRoute, 
    private router: Router, 
    private productService: ProductService) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    this.productService.readById(id+'').subscribe(prod => {
      this.product = prod;
    })
  }

  deleteProduct(): void {
    this.productService.delete(this.product.id+'').subscribe(()=>{
      this.productService.showMessage('Produto deletado com sucesso');
      this.router.navigate(['/products']);
    });
  }

  cancel(): void {
    this.router.navigate(['/products']);
  }

}
