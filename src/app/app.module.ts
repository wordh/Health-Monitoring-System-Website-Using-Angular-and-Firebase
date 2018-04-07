import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule} from 'angularfire2/database';



import { AppComponent } from './app.component';
import { LoginScreenComponent } from './screens/login-screen/login-screen.component';
import { SignUpScreenComponent } from './screens/sign-up-screen/sign-up-screen.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { AuthService } from './auth-service';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { PatientListComponent } from './profile/patients/patient-list/patient-list.component';
import { DetailComponent } from './profile/patients/patient/detail/detail.component';
import { PatientComponent } from './patient/patient.component';

import { environment } from '../environments/environment';
import { DoctorComponent } from './doctor/doctor.component';
import { DoctorLoginComponent } from './screens/doctor-login/doctor-login.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginScreenComponent,
    SignUpScreenComponent,
    HomeComponent,
    ProfileComponent,
    PatientListComponent,
    DetailComponent,
    PatientComponent,
    DoctorComponent,
    DoctorLoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule
  ],
  
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
