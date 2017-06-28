import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public original='assets/palhaco';
  public img = 'assets/palhaco-1.png';
  constructor(public navCtrl: NavController) {

  }
  colorir(id){
    this.img = `${this.original}-${id}.png`;
    setTimeout( () => this.resetImg(), 400);
  }

  resetImg(){
    this.img = `${this.original}-1.png`;
  }

}
