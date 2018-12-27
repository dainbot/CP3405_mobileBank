import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ConfirmFeedbackPage } from './confirm-feedback';

@NgModule({
  declarations: [
    ConfirmFeedbackPage,
  ],
  imports: [
    IonicPageModule.forChild(ConfirmFeedbackPage),
  ],
})
export class ConfirmFeedbackPageModule {}
