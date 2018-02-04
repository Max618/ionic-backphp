import { Component } from '@angular/core';
import { NavController, LoadingController, AlertController } from 'ionic-angular';
import { Restaurante } from '../../model/restaurante/restaurante';
import { Http } from '@angular/http';
import { LoadedModule } from 'ionic-angular/util/module-loader';

@Component({
  selector: 'page-restaurantes',
  templateUrl: 'restaurantes.html'
})
export class RestaurantesPage {

  public restaurantes: Restaurante[];
  private loader: any;

  constructor(
    public navCtrl: NavController,
    private _http: Http,
    private _loadingCtrl: LoadingController,
    private _alertCtrl: AlertController
  ) {}
  
  ngOnInit(){
    this.createLoader();
    this.createHttpRequest();
  }

  private createLoader() {
    this.loader = this._loadingCtrl.create({
      content: 'Listando restaurantes. Aguarde...'
    });
    this.loader.present();
  }

  private createHttpRequest() {
    this._http
    .get('http://marmita.idsgeo.com/index.php/page/get_ionic')
    .map(res => res.json())
    .toPromise()
    .then(restaurantes => {
      this.restaurantes = restaurantes;
      this.loader.dismiss();
    })
    .catch(err => {
      console.log(err);
      this.createAlert();
    });
  }

  private createAlert() {
    this._alertCtrl.create({
      title: 'Falha na conexão',
      buttons: [{ text: 'Estou ciente!' }],
      subTitle: 'Não foi possível obter a lista de restaurantes. Tente Novamente.'
    }).present();
  }

  getRestaurante(restaurante) {
    console.log('Entrou na Action getRestaurante');
  }

}
