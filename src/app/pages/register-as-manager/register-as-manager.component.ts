import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Manager } from 'src/app/model/manager.model';
import { AddingService } from 'src/app/services/adding.service';
import { AuthentificationService } from 'src/app/services/authentification.service';

@Component({
  selector: 'app-register-as-manager',
  templateUrl: './register-as-manager.component.html',
  styleUrls: ['./register-as-manager.component.scss']
})
export class RegisterAsManagerComponent implements OnInit {

  manager: Manager =new Manager();
  errorMessage : string ="";
  focus;
  focus1;
  focus2;
  focus3;
  focus4;
  constructor( private addingService: AddingService, private authentificationService : AuthentificationService
    ,private router: Router,) { }

  ngOnInit(): void {

   if (this.authentificationService.currentManagerValue?.userId) {
      this.router.navigate(['addManager']);
      return;
    }
  }
  registerAsManager(){
    this.addingService.addManager(this.manager).subscribe( data => {
      this.router.navigate(['/manager']);},
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

}
