import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Mechanic } from 'src/app/model/mechanic.model';
import { AddingService } from 'src/app/services/adding.service';

@Component({
  selector: 'app-register-as-mechanic',
  templateUrl: './register-as-mechanic.component.html',
  styleUrls: ['./register-as-mechanic.component.scss']
})
export class RegisterAsMechanicComponent implements OnInit {

  mechanic: Mechanic =new Mechanic();
  errorMessage : string ="";
  focus;
  focus1;
  focus2;
  focus3;
  focus4;
  constructor( private addingService: AddingService, 
    private router: Router,) { }

  ngOnInit(): void {
    
  }
  registerAsMechanic(){
    this.addingService.addMechanic(this.mechanic).subscribe( data => {
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
