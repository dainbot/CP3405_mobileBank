import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TransferPage } from '../transfer/transfer'

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

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConfirmTransPage');
  }

  openTransferPage(){
    this.navCtrl.push(TransferPage)
  }

}
