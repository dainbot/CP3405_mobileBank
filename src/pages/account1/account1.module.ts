import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Account1Page } from './account1';

@NgModule({
  declarations: [
      //     declare the component belong to NgModule
    Account1Page,
  ],
  imports: [
     //     imports the IonicPageModule to NgModule
    IonicPageModule.forChild(Account1Page),
  ],
})
export class Account1PageModule {}
