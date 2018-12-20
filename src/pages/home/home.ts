import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TransferPage } from '../transfer/transfer';

import { TransHistoryPage } from '../trans-history/trans-history';


import { SettingsPage } from '../settings/settings';
import { CreateAccountPage } from '../create-account/create-account';
import { AccountCreationPage } from '../account-creation/account-creation';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  openTransferPage(){
    this.navCtrl.push(TransferPage)
  }


  openTransHistoryPage(){
    this.navCtrl.push(TransHistoryPage)
  }


  openSettingsPage(){
    this.navCtrl.push(SettingsPage)
  }
  openCreateAccountPage(){
    this.navCtrl.push(CreateAccountPage)
  }
  openAccountCreationPage(){
    this.navCtrl.push(AccountCreationPage)
  }

}
