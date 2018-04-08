import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { AuthService } from '../auth-service';
import * as firebase from 'firebase';
import {Router} from '@angular/router';
import {NgForm} from '@angular/forms';
import { Chart } from 'angular-highcharts';
import { INT_TYPE } from '@angular/compiler/src/output/output_ast';
import { findValue } from '@firebase/util';



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

  chart = new Chart({
    chart:{
      type:'line'
    },
    title:{
      text:'Line Chart'
    },
    credits:{
      enabled:false
    },
    series:[{
      name:'line1',
      data:[0,0,0,0,0,0,0,0,0,0]
    }]
  });




  add(){
    
    this.items.forEach(element => {
      element.forEach(element => {
        let value= Object.keys(element).map(key=>element[key]);
        console.log(value[6]);
        this.chart.addPoint(value[6]);
      });
    });
    
    
    this.chart.removePoint(0);
    
    
  }

  onSubmit(form: NgForm) {
    
    firebase.auth().signOut;
    this.router.navigateByUrl('');
  }

  ngOnInit() {
  }

}
