import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { MenuPage } from '../pages/menu/menu';
import { Exercicio2Page} from '../pages/exercicio2/exercicio2';
import { Exercicio3Page} from '../pages/exercicio3/exercicio3'


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = MenuPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}
