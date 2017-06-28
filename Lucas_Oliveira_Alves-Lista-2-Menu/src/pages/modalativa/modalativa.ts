import { Component } from '@angular/core';
import { NavParams, ViewController } from 'ionic-angular';

/*
  Generated class for the Modalativa page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-modalativa',
  templateUrl: 'modalativa.html'
})
export class ModalativaPage {

  public wifiName;
  public qualidade;
  public potencia;

  constructor( public view: ViewController, public navParams: NavParams) {
    this.wifiName = this.navParams.get('wifiName');
    this.qualidade = Math.random();
    this.qualidade = parseFloat(this.qualidade.toFixed(2));
    this.potencia = parseFloat(Math.random().toFixed(2));

  }

  closemodal(){
    this.view.dismiss();
  }
}
