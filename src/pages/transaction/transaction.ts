import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ConfirmTransPage } from "../confirm-trans/confirm-trans";
import { amount } from "../../models/amount";
import { AngularFireDatabase } from 'angularfire2/database';

/**
 * Generated class for the TransactionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-transaction',
  templateUrl: 'transaction.html',
})
export class TransactionPage {

  //   Store user's inputs into amount file
  amount = {} as amount;

  constructor(private afDatabase: AngularFireDatabase,
              public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TransactionPage');
  }

  //   Push this page and open confirmation page
  openConfirmTransPage(){
    this.afDatabase.list('amount').push(this.amount)
      .then(() => this.navCtrl.push(ConfirmTransPage))
  }

}

