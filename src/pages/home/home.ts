import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TransferPage } from '../transfer/transfer';

import { TransHistoryPage } from '../trans-history/trans-history';
import { SettingsPage } from '../settings/settings';
import { CreateAccountPage } from '../create-account/create-account';
import { AccountCreationPage } from '../account-creation/account-creation';
import { AccountInfoPage} from "../account-info/account-info";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

    /**
  * Button event, when user click the transfer event, it will go to Transfer page
  */
  openTransferPage(){
    this.navCtrl.push(TransferPage)
  }

    /**
  * Button event, when user click the transaction history event, it will go to TransactionHistory page
  */
  openTransHistoryPage(){
    this.navCtrl.push(TransHistoryPage)
  }

     /**
  * Button event, when user click the setting event, it will go to Setting page
  */
  openSettingsPage(){
    this.navCtrl.push(SettingsPage)
  }
  
       /**
  * Button event, when user click the CreateAccount event, it will go to CreateAccount page
  */
  openCreateAccountPage(){
    this.navCtrl.push(CreateAccountPage)
  }
  
         /**
  * Button event, when user click the AccountCreate event, it will go to AccountCreate page
  */
  openAccountCreationPage(){
    this.navCtrl.push(AccountCreationPage)
  }

         /**
  * Button event, when user click the AccountInfo event, it will go to AccountInfo page
  */
  openAccountInfoPage(){
    this.navCtrl.push(AccountInfoPage)
  }
}
