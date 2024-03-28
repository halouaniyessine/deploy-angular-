import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  product: any = {
    name: 'Product Name',
    description: 'Product Description',
    imageUrl: 'assets/images/chemise.jpg',
    sizes: ['Small', 'Medium', 'Large'],
    price: 3.99
  };

  constructor() { }

  ngOnInit(): void {
  }

}