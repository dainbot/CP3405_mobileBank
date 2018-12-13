import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TransferPage } from '../transfer/transfer';
import { TransHistoryPage } from '../trans-history/trans-history';


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

}
