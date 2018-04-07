import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { AuthService } from '../auth-service';
import * as firebase from 'firebase';
import {Router} from '@angular/router';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.css']
})
export class DoctorComponent implements OnInit {

  items: Observable<any[]>;

  constructor(public db: AngularFireDatabase,private router:Router) { 
    
    this.items = db.list('Users').valueChanges();
    
  }

  onSubmit(form: NgForm) {
    
    firebase.auth().signOut;
    this.router.navigateByUrl('');
  }

  ngOnInit() {
  }

}
