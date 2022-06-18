import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Client } from 'src/app/model/client.model';
import { AuthentificationService } from 'src/app/services/authentification.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  client: Client = new Client();
  errorMessage : string ="";
  focus;
  focus1;
  focus2;
  focus3;
  focus4;
  constructor(
    private authentificationService: AuthentificationService, 
    private router: Router,

  ) { }

  ngOnInit(): void {
    if (this.authentificationService.currentClientValue?.userId) {
      this.router.navigate(['/profile']);
      return;
    }
 
   
    var body = document.getElementsByTagName("body")[0];
    body.classList.add("register");

    const signUpButton = document.getElementById('signUp');
    const signInButton = document.getElementById('signIn');
    const container = document.getElementById('container');

    signUpButton.addEventListener('click', () => {
      container.classList.add('right-panel-active');
    });

    signInButton.addEventListener('click', () => {
      container.classList.remove('right-panel-active');
    });
    
    

  }

    registerAsClient(){
      this.authentificationService.registerAsClient(this.client).subscribe( data => {
        this.router.navigate(['/profile']);},
        err => {
          if (err?.status === 409){
            this.errorMessage = 'Username alredy exist.';
          } else {
            this.errorMessage =  'Unexpected error occured';
            console.log(err);
          }
        }
        ) 
    }
    loginAsClient(){
      
      this.authentificationService.loginAsClient(this.client).subscribe( data => {
        this.router.navigate(['/profile']);
         }, err => {
        this.errorMessage ='Username or Password is incorrect';
        console.log(err);
      })
    }

  
}
