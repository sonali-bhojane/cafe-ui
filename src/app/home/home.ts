import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [NgFor,RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
 featuredItems = [
    {
      name: 'Cappuccino',
      description: 'Espresso with steamed milk, topped with foam',
      price: 150,
      image: 'images/coffe1.jpg'
    },
    {
      name: 'Latte',
      description: 'Espresso with milk and light foam',
      price: 160,
      image: 'images/latte-coffe.jpg'
    },
    {
      name: 'Croissant',
      description: 'Buttery flaky croissant, perfect with coffee',
      price: 80,
      image: 'images/croissant-coffe.jpg'
    },
    {
      name: 'Iced Coffee',
      description: 'Cold brewed coffee with ice and cream',
      price: 170,
      image: 'images/ice-cofee.jpg'
    },
     { 
      name: 'Blueberry Muffin', 
       description: 'Soft muffin with fresh blueberries',
        price: 90,
        image: 'images/bluberry-muffin.jpg' 
      },
    { 
      name: 'Chocolate Brownie', 
      description: 'Rich chocolate brownie with nuts',
       price: 120,
        image: 'images/brownie.jpg' 
      }
  ];

  constructor() { }

  ngOnInit(): void {
    // You can add scroll animations or any other logic here
  }

}
