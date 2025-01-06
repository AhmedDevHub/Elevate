import { SearchPipe } from './../../core/pipes/search.pipe';
import { Component, OnInit } from '@angular/core';
import { CuttextPipe } from '../../core/pipes/cuttext.pipe';
import { Product } from '../../core/interfaces/product';
import { ProductService } from '../../core/services/product.service';
import { CurrencyPipe, NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CuttextPipe,SearchPipe,RouterLink,NgIf,NgFor,CurrencyPipe,FormsModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit {
  constructor(private productService: ProductService) {}


  products: Product[] = [];
  isLoading: boolean = true;
  term: string = '';

  ngOnInit(): void {
    this.productService.getProducts().subscribe(
      (data) => {
        this.products = data;
        this.isLoading = false;
      },
      (error) => {
        console.error('Error fetching product data', error);
        this.isLoading = false;
      }
    );
  }
}
