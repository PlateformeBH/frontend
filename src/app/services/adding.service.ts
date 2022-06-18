import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Manager } from '../model/manager.model';
import { Mechanic } from '../model/mechanic.model';
import { Supplier } from '../model/supplier.model';
import { AuthentificationService } from './authentification.service';
import { RequestBaseService } from './request-base.service';
const API_URL1 = environment.BASE_URL + '/api/manager/'

@Injectable({
  providedIn: 'root'
})
export class AddingService extends RequestBaseService {

  constructor(authentificationService: AuthentificationService, http: HttpClient ) 
  {
    super(authentificationService, http);
   }

   addManager(manager: Manager): Observable<any>{
    return this.http.post(API_URL1 + 'sign-up', manager, {headers: this.getManagerHeaders}) ;
   }
   addMechanic(mechanic: Mechanic) : Observable<any>{
    return this.http.post(API_URL1 + 'add/mechanic', mechanic, {headers: this.getManagerHeaders}) ;
   }

   addSupplier(supplier: Supplier) : Observable<any>{
    return this.http.post(API_URL1+ 'add/supplier', supplier, {headers: this.getManagerHeaders});
   }



}
