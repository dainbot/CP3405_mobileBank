import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TransferPage } from '../transfer/transfer'
// @ts-ignore
import { AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database';
import { amount } from './../../models/amount';

/**
 * Generated class for the ConfirmTransPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-confirm-trans',
  templateUrl: 'confirm-trans.html',
})
export class ConfirmTransPage {

  amountData: FirebaseObjectObservable<amount>

  constructor(private afDatabase: AngularFireDatabase,
              public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewWillLoad() {
    this.amountData = this.afDatabase.object('amount')
  }

  openTransferPage(){
    this.navCtrl.push(TransferPage)
  }

}
