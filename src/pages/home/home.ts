import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TransferPage } from '../transfer/transfer';
import { SettingsPage } from '../settings/settings';
import { CreateAccountPage } from '../create-account/create-account';

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
  openSettingsPage(){
    this.navCtrl.push(SettingsPage)
  }
  openCreateAccountPage(){
    this.navCtrl.push(CreateAccountPage)
  }
}
