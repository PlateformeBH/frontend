import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Manager } from 'src/app/model/manager.model';
import { Mechanic } from 'src/app/model/mechanic.model';
import { Supplier } from 'src/app/model/supplier.model';
import { AuthentificationService } from 'src/app/services/authentification.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  manager: Manager = new Manager();
  mechanic: Mechanic = new Mechanic();
  supplier: Supplier = new Supplier();
  errorMessage : string ="";
  focus5;
  focus7;
  
  focus4;
  constructor(
    private authentificationService: AuthentificationService, 
    private router: Router,

  ) { }

  ngOnInit(): void {
    if (this.authentificationService.currentManagerValue?.userId) {
      this.router.navigate(['/profile']);
      return;
    }else if (this.authentificationService.currentMechanicValue?.userId) {
      this.router.navigate(['/profile']);
      return;
    }else if (this.authentificationService.currentSupplierValue?.userId) {
      this.router.navigate(['/profile']);
      return;
    }
    
  }
  loginAsManager(){
    this.authentificationService.loginAsManager(this.manager).subscribe( data => {
      this.router.navigate(['/profile']);
      console.log(this.manager.token);
    }, err => {
      this.errorMessage ='Username or Password is incorrect';
      console.log(err);
    })
  }
  loginAsMechanic(){
    this.authentificationService.loginAsMechanic(this.mechanic).subscribe( data => {
      this.router.navigate(['/profile']);
      console.log(this.mechanic.token);
    }, err => {
      this.errorMessage ='Username or Password is incorrect';
      console.log(err);
    })
  }
  loginAsSupplier(){
    this.authentificationService.loginAsSupplier(this.supplier).subscribe( data => {
      this.router.navigate(['/profile']);
      console.log(this.supplier.token);
    }, err => {
      this.errorMessage ='Username or Password is incorrect';
      console.log(err);
    })
  }

}
