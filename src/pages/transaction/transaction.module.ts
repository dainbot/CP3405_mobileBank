import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TransactionPage } from './transaction';

@NgModule({
  declarations: [
  //     declare the components belong to NgModule
    TransactionPage,
  ],
  imports: [
  //     imports the IonicPageModule to NgModule
    IonicPageModule.forChild(TransactionPage),
  ],
})
export class TransactionPageModule {}
