import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { createCardPage } from './createCard';

@NgModule({
  declarations: [
    createCardPage,
  ],
  imports: [
    IonicPageModule.forChild(createCardPage),
  ],
})
export class createCardPageModule {}
