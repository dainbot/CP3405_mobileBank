import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {TransferPage} from "../transfer/transfer";
import {AccountCreationPage} from "../account-creation/account-creation";

/**
 * Generated class for the ConfirmCreationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-confirm-creation',
  templateUrl: 'confirm-creation.html',
})
export class ConfirmCreationPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConfirmCreationPage');
  }
  openAccountCreationPage(){
    this.navCtrl.push(AccountCreationPage)
  }
}
