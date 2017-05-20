import { Component } from '@angular/core';
import { NavController, NavParams, ModalController, Platform } from 'ionic-angular';

import { ItemDetailPage } from '../item-detail/item-detail';
import { Items } from '../../providers/providers';
import { Item } from '../../models/item';
import {AngularFire, FirebaseListObservable} from 'angularfire2';
@Component({
  selector: 'page-search',
  templateUrl: 'search.html'
})
 

export class SearchPage {
 public  foods: FirebaseListObservable<any>;
 public currentItems: any = this.foods;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams, public items: Items, angFire: AngularFire,
              private modalCtrl: ModalController, private platform: Platform,) {
    this.foods= angFire.database.list('/Menu');
    
  }

  /**
   * Perform a service for the proper items.
   */
  getItems(ev) {//doesnt work
    let val = ev.target.value;
    if(!val || !val.trim()) {
      this.currentItems = [];
      return;
    }
    this.currentItems = this.items.query({
      foods: val
    });
  } 

  /**
   * Navigate to the detail page for this item.
   */
  openItem(menu) {
        let modal = this.navCtrl.push(ItemDetailPage, {menu: menu});
        
    
    };

   
  }


