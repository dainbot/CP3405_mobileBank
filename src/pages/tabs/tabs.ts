import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { SettingsPage } from '../settings/settings';
import { AccountInfoPage } from "../account-info/account-info";


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = AccountInfoPage;
  tab2Root = HomePage;
  tab3Root = SettingsPage;

  constructor() {

  }
}
