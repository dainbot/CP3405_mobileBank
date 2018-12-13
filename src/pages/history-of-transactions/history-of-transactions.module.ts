import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HistoryOfTransactionsPage } from './history-of-transactions';

@NgModule({
  declarations: [
    HistoryOfTransactionsPage,
  ],
  imports: [
    IonicPageModule.forChild(HistoryOfTransactionsPage),
  ],
})
export class HistoryOfTransactionsPageModule {}
