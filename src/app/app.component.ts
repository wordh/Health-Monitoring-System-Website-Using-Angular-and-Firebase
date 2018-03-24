import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { Options } from 'selenium-webdriver/edge';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Amar Health';

  ngOnInit(){
    firebase.initializeApp({
        apiKey: "AIzaSyBsEyVxx2c8l3_Vs_qpG69gAh_f8B4wkSM",
        authDomain: "amarhealth-14448.firebaseapp.com",
        databaseURL: "https://amarhealth-14448.firebaseio.com",
        projectId: "amarhealth-14448",
        storageBucket: "amarhealth-14448.appspot.com",
        messagingSenderId: "880269540702"

      }
    );
  }
}
