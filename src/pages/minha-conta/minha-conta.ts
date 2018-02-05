import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CadastroPage } from '../cadastro/cadastro';
import { LoginPage } from '../login/login';

@Component({
  selector: 'page-minha-conta',
  templateUrl: 'minha-conta.html'
})
export class MinhaContaPage {

  constructor(public navCtrl: NavController) {
  }
  
  goToCadastro(parans){
    if(!parans) parans = {};
    this.navCtrl.push(CadastroPage);
  }
  goToLogin(parans){
    if(!parans) parans = {};
    this.navCtrl.push(LoginPage);
  }
}
