import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router,NavigationExtras  } from '@angular/router';
import { HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.page.html',
  styleUrls: ['./reservation.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class ReservationPage implements OnInit {

  ListeDestination:any;

  constructor(private http: HttpClient,private router:Router) {
    this.http.get("http://127.0.0.1:8000/api/destinations").subscribe(results => {this.ListeDestination=results})
  }

  ngOnInit() {
  }

  pageAccueil(){
    this.router.navigate(['/home'])
  }

  reservation(item:any){
    let NavigationExtras: NavigationExtras ={
      state : {
        param1: item
      }
    };
    this.router.navigate(['/reservation-trajet'],NavigationExtras)
  }

}
