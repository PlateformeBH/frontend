import { Component, OnInit } from "@angular/core";
import { Router, NavigationEnd } from "@angular/router";
import { Client } from "src/app/model/client.model";
import { Manager } from "src/app/model/manager.model";
import { Mechanic } from "src/app/model/mechanic.model";
import { Supplier } from "src/app/model/supplier.model";
import { AuthentificationService } from "src/app/services/authentification.service";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"]
})
export class NavbarComponent implements OnInit {
  isCollapsed = true;
  currentClient: Client = new Client;
  
  currentManager: Manager = new Manager;
  currentMechanic: Mechanic = new Mechanic;
  currentSupplier: Supplier = new Supplier;
  constructor(private authentificationService: AuthentificationService, private router: Router) {
    router.events.subscribe(val => {
      this.isCollapsed = true;
    });
    this.authentificationService.currentClient.subscribe(data => {
      this.currentClient = data;
    });
    this.authentificationService.currentManager.subscribe(data1 => 
      {this.currentManager = data1;});
    this.authentificationService.currentMechanic.subscribe(data2 => 
        {this.currentMechanic =data2;});
    this.authentificationService.currentSupplier.subscribe(data3 => 
        {this.currentSupplier =data3;});
  }
  mobileView(){
    if (window.innerWidth < 992) {
        return true;
    }
    return false;
  }
  ngOnInit() {}
  logOut() {
    this.authentificationService.logOutAsClient();
    this.authentificationService.logOutAsManager();
    this.authentificationService.logOutAsMechanic();
    this.authentificationService.logOutAsSupplier();
    this.router.navigate(['/register']);
  }
}
