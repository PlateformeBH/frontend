import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { PieceSaveComponent } from 'src/app/component/piece-save/piece-save.component';
import { UserSaveComponent } from 'src/app/component/user-save/user-save.component';
import { Manager } from 'src/app/model/manager.model';
import { Piece } from 'src/app/model/piece.model';
import { Supplier } from 'src/app/model/supplier.model';
import { AddingService } from 'src/app/services/adding.service';
import { AuthentificationService } from 'src/app/services/authentification.service';
import { PieceService } from 'src/app/services/piece.service';

@Component({
  selector: 'app-supplier',
  templateUrl: './supplier.component.html',
  styleUrls: ['./supplier.component.scss']
})
export class SupplierComponent implements OnInit {

  
  supplierList : Array<Supplier>;
  errorMessage: string = "";
  currentManager: Manager = new Manager;
  selectedSupplier : Supplier = new Supplier();
  @ViewChild(UserSaveComponent) userSaveComponent : UserSaveComponent | undefined ;

  constructor( private addingService : AddingService ,private authentificationService : AuthentificationService,
    ) {this.authentificationService.currentManager.subscribe(data3 => 
     {this.currentManager =data3;}); }

  ngOnInit(): void {
    this.addingService.getAllSuppliers().subscribe(data => {
      this.supplierList =data ;
    });
  }
  
  createSupplierRequest(){
    this.userSaveComponent?.showSupplierModal();
  }
  saveSupplierWatcher(supplier : Supplier){
    this.supplierList.push(supplier);
  }
  deleteSupplier(supplier :Supplier){
    let itemIndex = this.supplierList.findIndex(item => item.userId === supplier.userId);
    this.addingService.deleteSupplier(supplier).subscribe(data => {
      this.supplierList.splice(itemIndex, 1)
    },err => {
      this.errorMessage= 'Unexpected error occurred.';
      console.log(err);
    })
  }
}
