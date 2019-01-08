import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TransferPage } from '../transfer/transfer'
import { AngularFireDatabase } from 'angularfire2/database';
import { amount } from '../../models/amount';

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

  items;
  constructor(public navCtrl: NavController, public navParams: NavParams,
              private afDatabase: AngularFireDatabase) {
                this.getDataFromFireBase();
  }

  getDataFromFireBase(){
    //     get account creation data from firebase
    this.afDatabase.list('amount').valueChanges().subscribe(
      data => {
        console.log(data)
        this.items = data
      }
    )
  }

    /**
  * Button event, when user click the event, it will go to Transfer page
  */
  openTransferPage(){
    this.navCtrl.push(TransferPage)
  }

}
