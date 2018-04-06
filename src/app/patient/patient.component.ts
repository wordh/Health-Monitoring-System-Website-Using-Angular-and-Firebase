import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { AuthService } from '../auth-service';


@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {

  items: Observable<any[]>;
  itemValue = '';
  constructor(public db: AngularFireDatabase) { 
    this.items = db.list('0cJcpkbKwge2syUSXLyNvyMPUEb2').valueChanges();
    
  }
  onSubmit() {
    
    this.db.list('0cJcpkbKwge2syUSXLyNvyMPUEb2').push({ content: this.itemValue });
    this.itemValue = '';
  }

  ngOnInit() {
  }

}
