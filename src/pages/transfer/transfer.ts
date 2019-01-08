import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TransactionPage } from '../transaction/transaction';

/**
 * This ts file is for transfer page to call and store functions
 */

@IonicPage()
@Component({
  selector: 'page-transfer',
  templateUrl: 'transfer.html',
})
export class TransferPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TransferPage');
  }
/**
 * When user click the button, this is the event where should user go
 */
  openTransactionPage(){
    this.navCtrl.push(TransactionPage)
  }

}
