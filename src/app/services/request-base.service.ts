import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Client } from "../model/client.model";
import { Manager } from "../model/manager.model";
import { Mechanic } from "../model/mechanic.model";
import { Supplier } from "../model/supplier.model";
import { AuthentificationService } from "./authentification.service";


export abstract class RequestBaseService {

  protected currentClient: Client = new Client;
  protected currentManager: Manager = new Manager;
  protected currentMechanic: Mechanic = new Mechanic;
  protected currentSupplier: Supplier = new Supplier;

  constructor(protected authentificationService: AuthentificationService, protected http: HttpClient) {
    this.authentificationService.currentClient.subscribe(data => {
      this.currentClient = data;
    });
    this.authentificationService.currentManager.subscribe(data1 => {
      this.currentManager = data1;
    });
    this.authentificationService.currentMechanic.subscribe(data2 => {
      this.currentMechanic = data2;
    });
    this.authentificationService.currentSupplier.subscribe(data3 => {
      this.currentSupplier = data3;
    });
  }

  get getClientHeaders(): HttpHeaders {
    return new HttpHeaders(
      {
        authorization: 'Bearer ' + this.currentClient?.token,
        "Content-Type": "application/json; charset=UTF-8"
      }
    );
  }
  get getManagerHeaders(): HttpHeaders {
    return new HttpHeaders(
      {
        authorization: 'Bearer ' + this.currentManager?.token,
        "Content-Type": "application/json; charset=UTF-8"
      }
    );
  }

  get getMechanicHeaders(): HttpHeaders {
    return new HttpHeaders(
      {
        authorization: 'Bearer ' + this.currentMechanic?.token,
        "Content-Type": "application/json; charset=UTF-8"
      }
    );
  }

  get getSupplierHeaders(): HttpHeaders {
    return new HttpHeaders(
      {
        authorization: 'Bearer ' + this.currentSupplier?.token,
        "Content-Type": "application/json; charset=UTF-8"
      }
    );
  }

}
