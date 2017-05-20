import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Item } from '../../models/item';
import {AngularFire, FirebaseListObservable} from 'angularfire2';

@Injectable()
export class Items {
  items: Item[] = [];

  defaultItem: any = {
    "name": "Fried rice with shrimps",
         "profilePic": "assets/img/speakers/frshrimp.jpg",
         "Price": "Price: 45฿"
  };


  constructor(public http: Http) {
    let items = [
      {
         "name": "Fried rice with pork",
         "profilePic": "assets/img/speakers/frpork.jpg",
         "Price": "Price: 40฿"
       },
       {
         "name": "Fried rice with chicken",
         "profilePic": "assets/img/speakers/frchick.jpg",
         "Price": "Price: 40฿"
       },
       {
         "name": "Fried rice with shrimps",
         "profilePic": "assets/img/speakers/frshrimp.jpg",
         "Price": "Price: 45฿"
       },
       {
         "name": "Pad Kra Prao with pork",
         "profilePic": "assets/img/speakers/kppork.jpg",
         "Price": "Price: 40฿"
       },
       {
         "name": "Pad Kra Prao with chicken",
         "profilePic": "assets/img/speakers/kpchick.jpeg",
         "Price": "Price: 40฿"
       },
       {
         "name": "Pad Kra Prao with crispy pork",
         "profilePic": "assets/img/speakers/kpcpork.jpg",
         "Price": "Price: 45฿"
       },
       {
         "name": "Pad Kra Prao with seafood",
         "profilePic": "assets/img/speakers/kpseafood.jpg",
         "Price": "Price: 50฿"
       }
     ];

     for(let item of items) {
       this.items.push(new Item(item));
     }
  }

  query(params?: any) {
    if(!params) {
      return this.items;
    }

    return this.items.filter((item) => {
      for(let key in params) {
        let field = item[key];
        if(typeof field == 'string' && field.toLowerCase().indexOf(params[key].toLowerCase()) >= 0) {
          return item;
        } else if(field == params[key]) {
          return item;
        }
      }
      return null;
    });
  }

  add(item: Item) {
    this.items.push(item);
  }

  delete(item: Item) {
    this.items.splice(this.items.indexOf(item), 1);
  }
}
