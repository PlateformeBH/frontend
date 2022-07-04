import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Client } from 'src/app/model/client.model';
import { Manager } from 'src/app/model/manager.model';
import { Purchase } from 'src/app/model/purchase.model';
import { Supplier } from 'src/app/model/supplier.model';
import { AuthentificationService } from 'src/app/services/authentification.service';
import { PurchaseService } from 'src/app/services/purchase.service';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.scss']
})
export class PanierComponent implements OnInit {

  purchase: Purchase = new Purchase;

  purchaseList : Array<Purchase> = [];
  errorMessage : string ="";
  currentClient : Client = new Client ;
  currentManager : Manager = new Manager ;
  currentSupplier : Supplier = new Supplier;
  constructor(private purchaseService: PurchaseService , 
    
    private authentificationService : AuthentificationService,) {
      this.authentificationService.currentClient.subscribe(data => 
       {this.currentClient = data;} );
      this.authentificationService.currentManager.subscribe(data1 => {
        this.currentManager = data1;
      });
      this.authentificationService.currentSupplier.subscribe(data2 => {
        this.currentSupplier = data2;
      });

     }

  ngOnInit(): void {
    if (this.currentManager){
      this.purchaseService.getAllPurchases().subscribe(data4 => {
        this.purchaseList =data4;
      })
    }
   else if (this.currentClient){
      this.purchase.userId = this.authentificationService.currentClientValue.userId;
      this.purchaseService.getPurchasesOfClient(this.purchase).subscribe(data3 => {
        this.purchaseList = data3;
      });}
      else if (this.currentSupplier){
        this.purchase.supplierId = this.authentificationService.currentSupplierValue.userId;
        this.purchaseService.getPurchaseBySupplierId(this.purchase).subscribe(data5 => {
          this.purchaseList = data5;
        });

      }
    
  }
  deletePurchase(purchase : Purchase){
    let itemIndex = this.purchaseList.findIndex(item => item.purchaseId === purchase.purchaseId);
    this.purchaseService.deletePurchase(purchase).subscribe(data => {
      this.purchaseList.splice(itemIndex , 1);
    }, err => {
      this.errorMessage ='Unexpected error occured.';
      console.log(err);
    } )
  }


}
