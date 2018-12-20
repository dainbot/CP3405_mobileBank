import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TransHistoryPage } from './trans-history';

@NgModule({
  declarations: [
    TransHistoryPage,
  ],
  imports: [
    IonicPageModule.forChild(TransHistoryPage),
  ],
})
export class TransHistoryPageModule {}
