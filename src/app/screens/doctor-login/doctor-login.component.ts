import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { AuthService } from '../../auth-service';
import {Router} from '@angular/router';
import * as firebase from 'firebase';


@Component({
  selector: 'app-doctor-login',
  templateUrl: './doctor-login.component.html',
  styleUrls: ['./doctor-login.component.css']
})
export class DoctorLoginComponent implements OnInit {

  constructor(private authService:AuthService, private router:Router) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm){
    const email= form.value.email;
    const password = form.value.password;

    this.authService.login(email,password);
    if(firebase.auth().currentUser.email==email){
      this.router.navigateByUrl('doctor');
    }
    
  }
}
