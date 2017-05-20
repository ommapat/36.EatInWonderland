import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';
import {AngularFire, FirebaseListObservable} from 'angularfire2';
import { SearchPage } from '../../search/search';
import { Items } from '../../providers/providers';
import {AlertController} from 'ionic-angular';
import { MainPage } from '../../pages/pages';

@Component({
  selector: 'page-item-detail',
  templateUrl: 'item-detail.html'
})
export class ItemDetailPage {
  public menu: any = {};
  public foods: FirebaseListObservable<any>;
  public NavParams: any;
 public Price: " ";
 public Name: " ";
  

  constructor(public navCtrl: NavController,private  navParams: NavParams,  angFire: AngularFire, ViewCtrl: ViewController,public alertCtrl: AlertController) {
  
  }
  ionViewDidLoad() { //run this function when the page is started
        this.menu = this.navParams.get('menu');

            
            this.Name = this.menu.Name;
            this.Price = this.menu.Price;
        
    }
  showConfirm() {
    let confirm = this.alertCtrl.create({
      title: 'Are you sure?',
      message: 'Do you agree to order this?',
      buttons: [
        {
          text: 'Disagree',
          handler: () => {
            console.log('Disagree clicked');
          }
        },
        {
          text: 'Agree',
          handler: () => {
            console.log('Agree clicked');
            this.order();
          }
        }
      ]
    });
    confirm.present();
  }
  order() {
    let order = this.alertCtrl.create({
      title: 'Order Successful',
      message: 'Your order is successfully ordered.',
      buttons: [
        {
          text: 'Ok',
          handler: () => {
            console.log('Agree clicked');
            this.navCtrl.push(MainPage);
          }
        }
      ]
    });
    order.present();
  }  
  
}