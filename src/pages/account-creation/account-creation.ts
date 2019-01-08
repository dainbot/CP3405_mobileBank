import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CreateAccountPage } from '../create-account/create-account';
/**
 * Generated class for the AccountCreationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-account-creation',
  templateUrl: 'account-creation.html',
})
export class AccountCreationPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AccountCreationPage');
  }
  /**
  *Create the slides event with title and image, define the img location.
  */
  slides = [
    {
      title: "Account type:",
      image: "assets/imgs/bankcard.png",
    },
    {
      title: "Account type:",
      image: "assets/imgs/bankcard.png",
    },
    {
      title: "Account type:",
      image: "assets/imgs/bankcard.png",
    }
  ];
  /**
  * Button event, when user click the event, it will go to CreatAccount page
  */
  openCreateAccountPage(){
    this.navCtrl.push(CreateAccountPage)
  }
}
