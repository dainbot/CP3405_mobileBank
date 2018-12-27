import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FeedbackPage} from "../feedback/feedback";

/**
 * Generated class for the ConfirmFeedbackPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-confirm-feedback',
  templateUrl: 'confirm-feedback.html',
})
export class ConfirmFeedbackPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConfirmFeedbackPage');
  }
  openFeedbackPage(){
    this.navCtrl.push(FeedbackPage)
  }
}
