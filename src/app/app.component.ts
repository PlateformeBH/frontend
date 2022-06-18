import { Component, OnInit } from "@angular/core";
import Headroom from "headroom.js";
import { Router } from '@angular/router';
import { Client } from "./model/client.model";
import { AuthentificationService } from "./services/authentification.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  currentClient: Client = new Client;

  constructor(private authentificationService: AuthentificationService,public router: Router){
    this.authentificationService.currentClient.subscribe(data => {
      this.currentClient = data;
    });
  }

  ngOnInit(){
    var headroom = new Headroom(document.querySelector("#navbar-main"), {
      offset: 300,
      tolerance: {
        up: 30,
        down: 30
      },
    });
    headroom.init();
 
 }
 logOut() {
  this.authentificationService.logOutAsClient();
  this.router.navigate(['/login']);
}
}
