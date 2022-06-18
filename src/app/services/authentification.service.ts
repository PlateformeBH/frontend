import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Client } from '../model/client.model';
import {map} from "rxjs/operators";
import { environment } from 'src/environments/environment';

import { HttpClient } from '@angular/common/http';
import { Manager } from '../model/manager.model';
import { Mechanic } from '../model/mechanic.model';
import { Supplier } from '../model/supplier.model';
import { RequestBaseService } from './request-base.service';

const API_URL = environment.BASE_URL + '/api/authentication/' ;
const API_URL_1 = environment.BASE_URL + '/api/manager/' ;


@Injectable({
  providedIn: 'root'
})
export class AuthentificationService{

  

  public currentClient: Observable<Client>;
  private currentClientSubject :BehaviorSubject<Client>;

  public currentManager: Observable<Manager>;
  private currentManagerSubject: BehaviorSubject<Manager>;

  public currentMechanic: Observable<Mechanic>;
  private currentMechanicSubject : BehaviorSubject<Mechanic>;

  public currentSupplier: Observable<Supplier>;
  private currentSupplierSubject : BehaviorSubject<Supplier>;
  
  constructor(private http: HttpClient ) { 
    let storageClient;
    const storageClientAsStr = localStorage.getItem('currentClient');
    if (storageClientAsStr) {
      storageClient = JSON.parse(storageClientAsStr);
    }

    this.currentClientSubject = new BehaviorSubject<Client>(storageClient);
    this.currentClient = this.currentClientSubject.asObservable();
   
    let storageManager;
    const storageManagerAsStr = localStorage.getItem('currentManager');
    if (storageManagerAsStr) {
      storageManager = JSON.parse(storageManagerAsStr);
    }
    this.currentManagerSubject = new BehaviorSubject<Manager>(storageManager);
    this.currentManager = this.currentManagerSubject.asObservable();

    let storageMechanic;
    const storageMechanicAsStr = localStorage.getItem('currentMechanic');
    if (storageMechanicAsStr) {
      storageMechanic = JSON.parse(storageMechanicAsStr);
    }
    this.currentMechanicSubject = new BehaviorSubject<Mechanic>(storageMechanic);
    this.currentMechanic = this.currentMechanicSubject.asObservable();

    let storageSupplier;
    const storageSupplierAsStr = localStorage.getItem('currentSupplier');
    if (storageSupplierAsStr) {
      storageSupplier = JSON.parse(storageSupplierAsStr);
    }
    this.currentSupplierSubject = new BehaviorSubject<Supplier>(storageSupplier);
    this.currentSupplier = this.currentSupplierSubject.asObservable();
  }
  
  public get currentClientValue(): Client {
    return this.currentClientSubject.value;
  }
  public get currentManagerValue(): Manager {
    return this.currentManagerSubject.value;
  }
  public get currentMechanicValue(): Mechanic {
    return this.currentMechanicSubject.value;
  }

  public get currentSupplierValue(): Supplier {
    return this.currentSupplierSubject.value;
  }

  loginAsClient(client: Client): Observable<any> {
    return this.http.post<any>(API_URL + 'client/sign-in', client).pipe(
      map(response => {
        if (response) {
          localStorage.setItem('currentClient', JSON.stringify(response));
          this.currentClientSubject.next(response);
        }
        return response;
      })
    );
  }

  registerAsClient(client: Client): Observable<any> {
    return this.http.post(API_URL + 'client/sign-up', client);
  }

  logOutAsClient() {
    localStorage.removeItem('currentClient');
    this.currentClientSubject.next(new Client);
  }
  loginAsManager(manager: Manager): Observable<any> {
    return this.http.post<any>(API_URL + 'manager/sign-in', manager).pipe(
      map(response => {
        if (response) {
          localStorage.setItem('currentManager', JSON.stringify(response));
          this.currentManagerSubject.next(response);
        }
        return response;
      })
    );
  }

  registerAsManager(manager: Manager): Observable<any> {
    return this.http.post(API_URL_1 + 'sign-up', manager);
  }

  logOutAsManager() {
    localStorage.removeItem('currentManager');
    this.currentManagerSubject.next(new Manager);
  }

  loginAsMechanic(mechanic: Mechanic): Observable<any> {
    return this.http.post<any>(API_URL + 'mechanic/sign-in', mechanic).pipe(
      map(response => {
        if (response) {
          localStorage.setItem('currentMechanic', JSON.stringify(response));
          this.currentMechanicSubject.next(response);
        }
        return response;
      })
    );
  }

  registerAsMechanic(mechanic: Mechanic): Observable<any> {
    return this.http.post(API_URL_1 + 'add/mechanic', mechanic);
  }

  logOutAsMechanic() {
    localStorage.removeItem('currentMechanic');
    this.currentMechanicSubject.next(new Mechanic);
  }
  loginAsSupplier(supplier: Supplier): Observable<any> {
    return this.http.post<any>(API_URL + 'supplier/sign-in', supplier).pipe(
      map(response => {
        if (response) {
          localStorage.setItem('currentSupplier', JSON.stringify(response));
          this.currentSupplierSubject.next(response);
        }
        return response;
      })
    );
  }

  registerAsSupplier(supplier: Supplier): Observable<any> {
    return this.http.post(API_URL_1 + 'add/supplier', supplier);
  }

  logOutAsSupplier() {
    localStorage.removeItem('currentSupplier');
    this.currentSupplierSubject.next(new Supplier);
  }
}
