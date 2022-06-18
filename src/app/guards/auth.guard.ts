import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Client } from '../model/client.model';
import { Manager } from '../model/manager.model';
import { Mechanic } from '../model/mechanic.model';
import { Supplier } from '../model/supplier.model';
import { AuthentificationService } from '../services/authentification.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  private currentClient: Client = new Client;
  private currentManager: Manager= new Manager;
  private currentMechanic: Mechanic = new Mechanic;
  private currentSupplier: Supplier = new Supplier;
  constructor(
    private authentificationService: AuthentificationService, 
    private router: Router,

  ) {
    this.authentificationService.currentClient.subscribe( data => {
      this.currentClient = data ;
    });
    this.authentificationService.currentManager.subscribe( data1 => {
      this.currentManager = data1 ;
    });
    this.authentificationService.currentMechanic.subscribe( data2 => {
      this.currentMechanic = data2 ;
    });
    this.authentificationService.currentSupplier.subscribe( data3 => {
      this.currentSupplier = data3 ;
    });
   }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if (this.currentClient){
        if (route.data['roles']?.indexOf(this.currentClient.role) === -1){
          this.router.navigate(['/401']);
          return false;
        }
        return true;
      } else if (this.currentManager){
        if (route.data['roles']?.indexOf(this.currentManager.role) === -1){
          this.router.navigate(['/401']);
          return false;}
          return true;
      }else if (this.currentMechanic){
        if (route.data['roles']?.indexOf(this.currentMechanic.role) === -1){
          this.router.navigate(['/401']);
          return false;}
          return true;
      }else if (this.currentSupplier){
        if (route.data['roles']?.indexOf(this.currentSupplier.role) === -1){
          this.router.navigate(['/401']);
          return false;}
          return true;
      }
  
      this.router.navigate(['/register']);
        return true;
    }
  
}
