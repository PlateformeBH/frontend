import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Piece } from '../model/piece.model';
import { AuthentificationService } from './authentification.service';
import { RequestBaseService } from './request-base.service';

const API_URL = environment.BASE_URL + '/gateway/piece/'

@Injectable({
  providedIn: 'root'
})
export class PieceService extends RequestBaseService {

  constructor(authentificationService: AuthentificationService, http: HttpClient ) 
  {
    super(authentificationService, http);
   }

   addPiece(piece: Piece): Observable<any>{
    return this.http.post(API_URL +'add' , piece , {headers: this.getUserHeaders}) ;
   }

   deletePiece(piece: Piece): Observable<any>{
    return this.http.delete(API_URL +'delete/' + piece.idPiece, {headers: this.getSupplierHeaders });
   }

  getAllPieces(): Observable<any>{
     return this.http.get(API_URL + 'all' ,  {headers: this.getUserHeaders});
    }
  getPieceByRef(piece : Piece): Observable<any> {
    return this.http.get(API_URL + 'ref/' + piece.reference );
  }

 
  getPieceBySupplierId(piece : Piece): Observable<any>{
    return this.http.get(API_URL + 'supp/' + piece.supplierId);
  }
  getPieceByFamily(piece : Piece) :Observable<any> {
    return this.http.get(API_URL + 'family/'+ piece.family);
  }
}
