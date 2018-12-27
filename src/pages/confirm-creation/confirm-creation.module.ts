import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ConfirmCreationPage } from './confirm-creation';

@NgModule({
  declarations: [
    ConfirmCreationPage,
  ],
  imports: [
    IonicPageModule.forChild(ConfirmCreationPage),
  ],
})
export class ConfirmCreationPageModule {}
