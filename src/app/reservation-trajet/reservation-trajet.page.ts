import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router,ActivatedRoute } from '@angular/router';
import { HttpClient} from '@angular/common/http';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-reservation-trajet',
  templateUrl: './reservation-trajet.page.html',
  styleUrls: ['./reservation-trajet.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class ReservationTrajetPage implements OnInit {

  destination:any;
  ListeVehicule:any;

  constructor(private http: HttpClient,private router: Router, private activeRoute : ActivatedRoute,private alertController: AlertController) {
    this.activeRoute.queryParams.subscribe(params=>{
      let obj:any = this.router.getCurrentNavigation()?.extras.state;
      this.destination = obj.param1; 
    })

    this.http.get("http://127.0.0.1:8000/api/vehicule").subscribe(results => {this.ListeVehicule=results})
   }

   async btnreserver() {
    const alert = await this.alertController.create({
      header: 'Confirmation',
      subHeader: 'Message de validation',
      message: 'Votre réservation à bien été effectuer',
      buttons: ['OK'],
    });

    await alert.present();
  }

  ngOnInit() {
  }
}
