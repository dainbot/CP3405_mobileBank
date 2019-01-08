import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ConfirmTransPage } from './confirm-trans';

@NgModule({
  declarations: [
//     declare the components belong to NgModule
    ConfirmTransPage,
  ],
  imports: [
    //     imports the module to NgModule
    IonicPageModule.forChild(ConfirmTransPage),
  ],
})
export class ConfirmTransPageModule {}
