import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { Exercicio2Page } from '../exercicio2/exercicio2';
import { Exercicio3Page } from '../exercicio3/exercicio3';

/*
  Generated class for the Menu page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html'
})
export class MenuPage {

  public currentPage = HomePage;
  public home = HomePage;
  public exercicio2 = Exercicio2Page;
  public exercicio3 = Exercicio3Page;
  constructor(public navCtrl: NavController, public navParams: NavParams) {}


  openPage(page){
    this.currentPage = page;
  }

}
