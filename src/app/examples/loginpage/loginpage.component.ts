import { Component, OnInit, OnDestroy } from "@angular/core";
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: "app-loginpage",
  templateUrl: "loginpage.component.html"
})
export class LoginpageComponent implements OnInit, OnDestroy {
  focus;
  focus1;
  public isAthentificated : boolean = false;
  public role!: string;
  public signinForm: any;
  public submitted = false;
  e:any;
  constructor( private fb: FormBuilder,
               private router: Router) {
  }

  ngOnInit() {
    var body = document.getElementsByTagName("body")[0];
    body.classList.add("login-page");
    this.signinForm = this.fb.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required,Validators.minLength(6)]]
  });
 // this.isAthentificated = this.authService.isAthentificated();
  //this.role=this.authService.getRole();
  }
  get f() { return this.signinForm.controls; }

  public signin() {
    this.submitted = true;
    if (this.signinForm.invalid) {
      return;
    }
   /* this.authService.signin(this.signinForm.value).subscribe( {next:(res) => {
        this.role=this.authService.getRole();
        console.log(this.role)

        if(this.role==="client")
          this.router.navigate(['examples/checkout-page']);
        else this.router.navigate(['examples/checkout-paget']);
      },error : err => {
        alert("email ou password incorrect")
        this.router.navigate(['login']);
      }
    });*/
  }
  ngOnDestroy(){
    var body = document.getElementsByTagName("body")[0];
    body.classList.remove("login-page");
  }
}
