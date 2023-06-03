import { Injectable } from '@angular/core';
import { Tag } from 'src/app/shared/models/Tag';
import { Foods } from 'src/app/shared/models/food';

@Injectable({
  providedIn: 'root',
})
export class FoodService {
  constructor() {}

  getFoodById(id:number):Foods{
return this.getAll().find(food => food.id == id)!;
  }

  getAllFoodByTag(tag: string): Foods[] {
    // if(tag=='All')
    // return this.getAll()
    // else
    // return this.getAll().filter(food => food.tags?.includes(tag));
    // you can type like this
    return tag == 'All'
      ? this.getAll()
      : this.getAll().filter((food) => food.tags?.includes(tag));
  }

  getAllTag(): Tag[] {
    return [
      { name: 'All', count: 16 },
      { name: 'FastFood', count: 8 },
      { name: 'Pizza', count: 1 },
      { name: 'Sandwich', count: 2 },
      { name: 'Momos', count: 2 },
      { name: 'Burger', count: 2 },
      { name: 'Roll', count: 1 },
      { name: 'Chinese', count: 7 },
      { name: 'Pasta', count: 2 },
    ];
  }

  getAll(): Foods[] {
    return [
      {
        id: 1,
        name: 'Aloo Tikki Burger',
        cookTime: '10-20',
        price: 8,
        favourite: true,
        origins: ['India', 'United States', 'Germany'],
        star: 4.2,
        imageurl: '/assets/images/1.jpg',
        tags: ['FastFood', 'Burger'],
      },
      {
        id: 2,
        name: 'Peri Peri Fries',
        cookTime: '10-15',
        price: 10,
        favourite: false,
        origins: ['India','French'],
        star: 4.0,
        imageurl: '/assets/images/2.jpg',
        tags: ['FastFood', 'Fries'],
      },
      {
        id: 3,
        name: 'Gravy Manchurian',
        cookTime: '25-40',
        price: 20,
        favourite: true,
        origins: ['India', 'China', 'Kolkata'],
        star: 4.5,
        imageurl: '/assets/images/3.jpg',
        tags: ['Chinese', 'Manchurian', 'FastFood'],
      },
      {
        id: 4,
        name: 'Steamed Momos',
        cookTime: '20-30',
        price: 6,
        favourite: true,
        origins: ['Nepal', 'Tibet'],
        star: 3.5,
        imageurl: '/assets/images/4.jpg',
        tags: ['Chinese', 'Momos'],
      },
      {
        id: 5,
        name: 'Farmhouse Pizza',
        cookTime: '30-40',
        price: 18,
        favourite: false,
        origins: ['Itlay'],
        star: 3.8,
        imageurl: '/assets/images/5.jpeg',
        tags: ['Pizza', 'Italian', 'Farmhouse'],
      },
      {
        id: 6,
        name: 'Paneer Roll',
        cookTime: '10-15',
        price: 6,
        favourite: false,
        origins: ['India'],
        star: 4.5,
        imageurl: '/assets/images/6.jpeg',
        tags: ['Snacks', 'Paneer', 'Roll'],
      },
      {
        id: 7,
        name: 'Gravy Paneer Manchurian',
        cookTime: '10-15',
        price: 180,
        origins: ['India', 'China', 'Kolkata'],
        favourite: false,
        star: 4.8,
        imageurl: '/assets/images/7.jpg',
        tags: ['Chinese', 'Manchurian', 'Paneer', 'FastFood'],
      },
      {
        id: 8,
        name: 'Paneer Momos',
        cookTime: '20-30',
        price: 8,
        favourite: true,
        origins: ['Nepal', 'Tibet'],
        star: 4.5,
        imageurl: '/assets/images/8.jpg',
        tags: ['Chinese', 'Momos','Paneer'],
      },
      {
        id: 9,
        name: 'American Club Sandwich',
        cookTime: '10-20',
        price: 8,
        favourite: true,
        origins: ['India', 'United States', 'Germany'],
        star: 4.2,
        imageurl: '/assets/images/9.jpg',
        tags: ['Snacks', 'American Club', 'Sandwich'],
      },
      {
        id: 10,
        name: 'Red Sauce Pasta',
        cookTime: '20-30',
        price: 10,
        favourite: false,
        origins: ['Itlay','China'],
        star: 4.0,
        imageurl: '/assets/images/10.jpg',
        tags: ['Red Sauce', 'Italian', 'Pasta'],
      },
      {
        id: 11,
        name: 'Classic Burger',
        cookTime: '10-20',
        price: 200,
        favourite: true,
        origins: ['India', 'United States', 'Germany'],
        star: 4.5,
        imageurl: '/assets/images/11.jpg',
        tags: ['FastFood', 'Burger', 'Classic'],
      },
      {
        id: 12,
        name: 'Chowmein',
        cookTime: '20-30',
        price: 10,
        favourite: true,
        origins: ['China', 'United States'],
        star: 3.5,
        imageurl: '/assets/images/12.jpg',
        tags: ['FastFood', 'Chinese', 'Noodles'],
      },
      {
        id: 13,
        name: 'Corn Cheese Sandwich',
        cookTime: '10-20',
        price: 10,
        favourite: false,
        origins: ['India', 'United States', 'Germany'],
        star: 3.8,
        imageurl: '/assets/images/13.jpg',
        tags: ['Snacks', 'Corn Cheese', 'Sandwich'],
      },
      {
        id: 14,
        name: 'White Sauce Pasta',
        cookTime: '25-35',
        price: 8,
        favourite: false,
        origins: ['Itlay','China'],
        star: 4.5,
        imageurl: '/assets/images/14.jpg',
        tags: ['White Sauce', 'Italian', 'Pasta'],
      },
      {
        id: 15,
        name: 'Hakka Noodles',
        cookTime: '30-45',
        price: 12,
        favourite: false,
        origins: ['China', 'United States'],
        star: 4.8,
        imageurl: '/assets/images/15.jpg',
        tags: ['FastFood', 'Chinese', 'Noodles'],
      },
      {
        id: 16,
        name: 'Schewan Noodles',
        cookTime: '30-45',
        price: 10,
        favourite: true,
        origins: ['China', 'United States'],
        star: 4.5,
        imageurl: '/assets/images/16.jpg',
        tags: ['FastFood', 'Noodles', 'Chinese'],
      },
    ];
  }
}
