import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { MenuPage } from '../pages/menu/menu';
import { Exercicio2Page } from '../pages/exercicio2/exercicio2';
import { Exercicio3Page } from '../pages/exercicio3/exercicio3';
import { ModalativaPage } from '../pages/modalativa/modalativa';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    MenuPage,
    Exercicio2Page,
    Exercicio3Page,
    ModalativaPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    MenuPage,
    Exercicio2Page,
    Exercicio3Page,
    ModalativaPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
