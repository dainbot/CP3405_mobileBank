import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Account1Page } from '../account1/account1';
import { Account2Page } from '../account2/account2';
import { Account3Page } from '../account3/account3';

/**
 * Generated class for the AccountInfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@IonicPage()
@Component({
  selector: 'page-account-info',
  templateUrl: 'account-info.html',
})

export class AccountInfoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AccountInfoPage');
  }
  openAccount1Page(){
  this.navCtrl.push(Account1Page)
  }

  openAccount2Page(){
    this.navCtrl.push(Account2Page)
  }

  openAccount3Page(){
    this.navCtrl.push(Account3Page)
  }
}
