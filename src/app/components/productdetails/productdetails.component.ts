import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ProductService } from '../../core/services/product.service';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-productdetails',
  standalone: true,
  imports: [CurrencyPipe,RouterLink],
  templateUrl: './productdetails.component.html',
  styleUrl: './productdetails.component.css'
})
export class ProductdetailsComponent implements OnInit{

  constructor(
    private _ActivatedRoute: ActivatedRoute,
    private ProductService:ProductService
  ) {}
  isLoading: boolean = true; // Add a loading flag to display loading state
  productId!: any;
  productDetails: any = {};

  ngOnInit(): void {
    this._ActivatedRoute.paramMap.subscribe({
      next: (params) => {
        this.productId = params.get('id');
        this.isLoading = false; // Set loading flag to false once data is fetched
      },
    });
    this.ProductService.getProductById(this.productId).subscribe({
      next: (responce) => {
        this.productDetails = responce;
        this.isLoading = false; // Set loading flag to false once data is fetched
      },
    });
  }
}
