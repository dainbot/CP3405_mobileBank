import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AccountCreationPage} from "../account-creation/account-creation";
import { AngularFireDatabase } from 'angularfire2/database';
import { Accountprofile} from "../../models/accountprofile";

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

  items;
  constructor(public navCtrl: NavController, public navParams: NavParams,
              private afDatabase: AngularFireDatabase) {
                this.getDataFromFireBase();
  }

  getDataFromFireBase(){
    this.afDatabase.list('accountprofile').valueChanges().subscribe(
      data => {
        console.log(data)
        this.items = data
      }
    )
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConfirmCreationPage');
  }
  openAccountCreationPage(){
    this.navCtrl.push(AccountCreationPage)
  }
}
