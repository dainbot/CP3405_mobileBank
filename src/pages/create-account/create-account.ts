import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from "../home/home";
import { ConfirmCreationPage } from "../confirm-creation/confirm-creation";
import { Accountprofile } from "../../models/accountprofile";
import { AngularFireDatabase } from 'angularfire2/database';

/**
 * Generated class for the CreateAccountPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-create-account',
  templateUrl: 'create-account.html',
})
export class CreateAccountPage {

  accountprofile = {} as Accountprofile;

  constructor(private afDatabase: AngularFireDatabase,
    public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreateAccountPage');
  }

  openConfirmCreationPage(){
      this.afDatabase.list('accountprofile').push(this.accountprofile)
        .then(() => this.navCtrl.push(ConfirmCreationPage))
  }

    /**
  * Button event, when user click the event, it will go to Home page
  */
  openHomePage(){
    this.navCtrl.push(HomePage)
  }
}
