import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Damage } from '../model/damage.model';
import { AuthentificationService } from './authentification.service';
import { RequestBaseService } from './request-base.service';
const API_URL1 = '8082/api/damage/ImgDamage/'
const API_URL = environment.BASE_URL + '/gateway/damage/'
@Injectable({
  providedIn: 'root'
})
export class DamageService extends RequestBaseService{

  constructor(authentificationService: AuthentificationService,
     http : HttpClient) {
    super(authentificationService, http);
   }

   saveDamage(damage : Damage): Observable<any> {
    return this.http.post(API_URL + 'add', damage, {headers: this.getClientHeaders});
   }

   deletedamage(damage : Damage): Observable<any>{
    return this.http.delete(API_URL + 'delete/' + damage.damageId , {headers: this.getUserHeaders } );
   }

   getAllDamages(): Observable<any>{
    return this.http.get(API_URL + 'all' ,  {headers: this.getUserHeaders});
   }

   getDamagesOfUser(damage : Damage): Observable<any> {
    return this.http.get(API_URL + 'client/' + damage.cin , {headers : this.getUserHeaders});

   }

   getDamagePhoto( damage : Damage ):Observable<any>{
    return this.http.get(API_URL +'ImgDamage/' + damage.damageId , {headers: this.getUserHeaders});
   }
   
}
