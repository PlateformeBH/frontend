import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Purchase } from '../model/purchase.model';
import { AuthentificationService } from './authentification.service';
import { RequestBaseService } from './request-base.service';


const API_URL = environment.BASE_URL + '/gateway/purchase/';
@Injectable({
  providedIn: 'root'
})
export class PurchaseService extends RequestBaseService{

  constructor( authentificationService: AuthentificationService, http : HttpClient) { 
    super(authentificationService, http);
  }

  savePurchase(purchase: Purchase): Observable<any>{
    return this.http.post(API_URL +'add' , purchase, {headers: this.getUserHeaders}) ;
   }

   deletePurchase(purchase : Purchase) : Observable<any> {
    return this.http.delete(API_URL + 'delete/' +  purchase.purchaseId , {headers: this.getClientHeaders} );
   }

   getAllPurchases(): Observable<any> {
    return this.http.get(API_URL + 'all', {headers: this.getManagerHeaders});
   }

   getPurchasesOfClient(purchase : Purchase): Observable<any> {
    return this.http.get(API_URL + 'client/' + purchase.userId , {headers: this.getClientHeaders});
   }

   getPurchaseByRef(purchase : Purchase) : Observable<any> {
    return this.http.get(API_URL + 'ref/' + purchase.reference , {headers : this.getUserHeaders});
   }
   getPurchaseBySupplierId(purchase : Purchase) : Observable<any> {
    return this.http.get(API_URL + 'sup/' + purchase.supplierId , {headers : this.getUserHeaders});
   }

}
