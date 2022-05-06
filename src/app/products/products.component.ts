import { Component, OnInit } from '@angular/core';
import { DiscountOffers } from '../Shared Classes and types/DiscountOffers';
import { IProduct } from '../Shared Classes and types/IProduct';
import { ICategory } from '../Shared Classes and types/ICategory';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  constructor() { }

  Discount: DiscountOffers = DiscountOffers.offer_2;
  Store_name: string = "shafey";
  Store_Logo: string = "../../assets/bleach";
  ProductList: IProduct[] = [{ID:2, Name: "a", Quantity: 20, Price: 100, img: " "},
                             {ID:3, Name: "b", Quantity: 30, Price: 200, img: " "} ];
  CategoryList: ICategory = {ID:1, Name: "p_one"};
  ClientName: string = " axxxx";
  IsPurshased: boolean = true;

  ngOnInit(): void {
  }

}
