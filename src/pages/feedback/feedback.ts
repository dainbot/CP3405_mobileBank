import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ConfirmFeedbackPage} from "../confirm-feedback/confirm-feedback";
import { Feedback } from "../../models/feedback";
import { AngularFireDatabase } from 'angularfire2/database';

/**
 * Generated class for the FeedbackPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-feedback',
  templateUrl: 'feedback.html',
})
export class FeedbackPage {

  feedback = {} as Feedback

  constructor(private afDatabase: AngularFireDatabase,
    public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FeedbackPage');
  }
  openConfirmFeedbackPage(){
      this.afDatabase.list('Feedback').push(this.feedback)
        .then(() =>this.navCtrl.push(ConfirmFeedbackPage))
  }
}
