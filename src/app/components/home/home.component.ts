import { Component, NgModule, OnInit } from '@angular/core';
import { ProductService } from '../../core/services/product.service';
import { Product } from '../../core/interfaces/product';
import { CuttextPipe } from '../../core/pipes/cuttext.pipe';
import { SearchPipe } from '../../core/pipes/search.pipe';
import { RouterLink } from '@angular/router';
import { CurrencyPipe, NgFor, NgIf, SlicePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CuttextPipe,
    SearchPipe,
    RouterLink,
    NgIf,
    NgFor,
    CurrencyPipe,
    SlicePipe,
    FormsModule,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
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
