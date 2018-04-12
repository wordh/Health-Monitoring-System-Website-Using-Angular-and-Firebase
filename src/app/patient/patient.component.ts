import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { AuthService } from '../auth-service';
import * as firebase from 'firebase';
import {Router} from '@angular/router';
import {NgForm} from '@angular/forms';
import { Chart } from 'angular-highcharts';
import {HIGHCHARTS_MODULES} from 'angular-highcharts';


@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']

})
export class PatientComponent implements OnInit {

  items: Observable<any[]>;
  list: Array<any>;
  //itemValue = '';
 boltesi = [];
  
  constructor(public db: AngularFireDatabase,private router:Router) {
    //firebase.auth().currentUser.uid
    //if (db.list('Users/'+firebase.auth().currentUser.uid))
      let count = 0;
      this.items = db.list('Users/'+firebase.auth().currentUser.uid).valueChanges();
      this.items.forEach(element => {
        let value= Object.keys(element).map(key=>element[key]);
         this.boltesi=value;
         this.chart.addPoint(value[8]);
         this.chart.removePoint(0);
         this.chart2.addPoint(value[1]);
         this.chart2.removePoint(0);
      });
      
    
  }


  chart = new Chart({
    
    chart:{
      animation: false,
      type:'line'
      
    },

    
    
    title:{
      text:'SPO2'
    },
    credits:{
      enabled:false
    },
    series:[{
      name:'Pulse Rate',
      
      data:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
    }]
  });

  chart2 = new Chart({
    
    chart:{
      animation: false,
      type:'line'
    },
    
    title:{
      text:'ECG'
    },
    credits:{
      enabled:false
    },
    series:[{
      name:'ECG',
      
      data:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
    }]
  });



  onSubmit(form: NgForm) {
    
    firebase.auth().signOut;
    this.router.navigateByUrl('');
  }

  ngOnInit() {
  }

}
