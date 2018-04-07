import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { SignUpScreenComponent } from './screens/sign-up-screen/sign-up-screen.component';
import { LoginScreenComponent } from './screens/login-screen/login-screen.component';
import { HomeComponent } from './home/home.component';
import { PatientComponent } from './patient/patient.component';
import { DoctorComponent } from './doctor/doctor.component';
import { DoctorLoginComponent } from './screens/doctor-login/doctor-login.component';

 

const appRoutes: Routes = [

    {path: 'signup',component:SignUpScreenComponent},
    {path: 'login',component:LoginScreenComponent},
    {path: '',component:HomeComponent},
    {path: 'patient',component:PatientComponent},
    {path: 'doctor',component:DoctorComponent},
    {path: 'doctorlogin',component:DoctorLoginComponent}

];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports:[RouterModule]
})

export class AppRoutingModule{

}