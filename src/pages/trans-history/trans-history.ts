import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database'

/**
 * Generated class for the TransHistoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-trans-history',
  templateUrl: 'trans-history.html',
})
export class TransHistoryPage {

  items;
  constructor(public navCtrl: NavController, public navParams: NavParams,
              private afDatabase: AngularFireDatabase) {
                this.getDataFromFireBase()
  }

  slides = [
    {
      image: "assets/imgs/bankcard.png",
    },
    {
      image: "assets/imgs/bankcard.png",
    },
    {
      image: "assets/imgs/bankcard.png",
    }
  ];

  getDataFromFireBase(){
    this.afDatabase.list('History').valueChanges().subscribe(
      data => {
        console.log(data)
        this.items = data
      }
    )
    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TransHistoryPage');
  }

}
