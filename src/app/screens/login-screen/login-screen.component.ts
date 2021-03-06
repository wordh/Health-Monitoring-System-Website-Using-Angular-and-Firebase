import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { AuthService } from '../../auth-service';
import {Router} from '@angular/router';
import * as firebase from 'firebase';

@Component({
  selector: 'app-login-screen',
  templateUrl: './login-screen.component.html',
  styleUrls: ['./login-screen.component.css']
})
export class LoginScreenComponent implements OnInit {

  constructor(private authService:AuthService, private router:Router) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm){
    const email= form.value.email;
    const password = form.value.password;

    this.authService.login(email,password);
    if(firebase.auth().currentUser.email==email){
      this.router.navigateByUrl('patient');
    }
    
  }
}


//private router:Router;
  //      this.router.navigateByUrl('patient');