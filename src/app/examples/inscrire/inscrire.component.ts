import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inscrire',
  templateUrl: './inscrire.component.html',
  styleUrls: ['./inscrire.component.scss']
})
export class InscrireComponent implements OnInit {

  public inscriptionForm: any;
  public submitted = false;
 // pa!:Client;
  msg : any;
  pinCode: any;

  constructor(    private fb: FormBuilder,    private router: Router) { }
  ngOnInit() {
    this.inscriptionForm = this.fb.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      serial_number: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(10)]],
      contract_number: ['', [Validators.required]],
      cin: ['', [Validators.required]],
      phoneNumber: ['', [Validators.required]],
      address: ['', [Validators.required]],
      login: ['', [Validators.required]],


      //  confirmPassword: ['', [Validators.required, Validators.minLength(10)]]

    });/*
    , {
      validator: MustMatch('password', 'confirmPassword')
    });*/
  }

  get f() { return this.inscriptionForm.controls; }
  /* public signup(): void {
    this.submitted = true;
    if (this.inscriptionForm.invalid) {
      return;
    }
    const  formdata=new FormData();
    this.pa=this.inscriptionForm.value;
    //console.log(this.pa);
    formdata.append('pa',JSON.stringify(this.pa));
    /*this.inscrireService.createClient(formdata).subscribe(reponse => {
      this.msg=reponse;
      console.log(reponse);
      this.router.navigate(['examples/account-settings']);
    }, err => {
      console.log("une erreur est survenue lors de la création de votre compte");
    });



  }*/

}
