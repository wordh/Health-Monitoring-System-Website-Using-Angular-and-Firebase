import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { AuthService } from '../auth-service';
import * as firebase from 'firebase';
import {Router} from '@angular/router';
import {NgForm} from '@angular/forms';


@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {

  items: Observable<any[]>;
  itemValue = '';
 
  
  constructor(public db: AngularFireDatabase,private router:Router) {
    //firebase.auth().currentUser.uid
     
    this.items = db.list(firebase.auth().currentUser.uid).valueChanges();
    
  }
  onSubmit(form: NgForm) {
    
    firebase.auth().signOut;
    this.router.navigateByUrl('');
  }

  ngOnInit() {
  }

}
