import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Supplier } from 'src/app/model/supplier.model';
import { AddingService } from 'src/app/services/adding.service';

@Component({
  selector: 'app-register-as-supplier',
  templateUrl: './register-as-supplier.component.html',
  styleUrls: ['./register-as-supplier.component.scss']
})
export class RegisterAsSupplierComponent implements OnInit {

  supplier: Supplier =new Supplier();
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
  registerAsSupplier(){
    this.addingService.addSupplier(this.supplier).subscribe( data => {
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
