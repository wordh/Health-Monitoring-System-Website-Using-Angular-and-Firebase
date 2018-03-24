import * as firebase from 'firebase';
import {Injectable} from '@angular/core'

@Injectable()

export class AuthService{
    singUp(email: string, password: string){
        firebase.auth().createUserWithEmailAndPassword(email,password).catch(
            error => console.log(error)
        );
    }

    login(email:string,password:string){
        firebase.auth().signInWithEmailAndPassword(email,password).then(
            reponse =>console.log('Success Login')
        ).catch(
            error => console.log(error)
        )
    }
}