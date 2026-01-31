import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  imports: [CommonModule],
  templateUrl: './menu.html',
  styleUrl: './menu.css',
})
export class Menu {
menuItems = [
  {
    category: 'Coffee',
    name: 'Cappuccino',
    description: 'Espresso with steamed milk, topped with foam',
    price: 150,
    image: 'images/coffe1.jpg'
  },
  {
    category: 'Coffee',
    name: 'Latte',
    description: 'Espresso with steamed milk and light foam',
    price: 160,
    image: 'assets/coffee2.jpg'
  },
  {
    category: 'Snacks',
    name: 'Croissant',
    description: 'Buttery flaky croissant',
    price: 80,
    image: 'assets/croissant.jpg'
  }
];

}
