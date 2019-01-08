import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ConfirmCreationPage } from './confirm-creation';

@NgModule({
  declarations: [
    //     declare the components belong to NgModule
    ConfirmCreationPage,
  ],
  imports: [
    //     imports the IonicPageModule to NgModule
    IonicPageModule.forChild(ConfirmCreationPage),
  ],
})
export class ConfirmCreationPageModule {}
