import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { PieceSaveComponent } from 'src/app/component/piece-save/piece-save.component';
import { Piece } from 'src/app/model/piece.model';
import { Purchase } from 'src/app/model/purchase.model';
import { Supplier } from 'src/app/model/supplier.model';
import { AuthentificationService } from 'src/app/services/authentification.service';
import { PieceService } from 'src/app/services/piece.service';
import { PurchaseService } from 'src/app/services/purchase.service';
declare var $: any ;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  pieceList: Array<Piece> = [];
  errorMessage: string = "";
  infoMessage: string = "";
  currentSupplier: Supplier = new Supplier;
  piece : Piece = new Piece();
  @ViewChild(PieceSaveComponent) savePieceComponent : PieceSaveComponent | undefined;
  constructor(private authentificationService : AuthentificationService,
               private pieceService: PieceService,
               private purchaseService : PurchaseService, 
               private router :Router) { 
                this.authentificationService.currentSupplier.subscribe(data3 => 
                  {this.currentSupplier =data3;});
               }

  ngOnInit(): void {

    if(this.currentSupplier){
      this.piece.supplierId = this.authentificationService.currentSupplierValue.userId
      this.pieceService.getPieceBySupplierId(this.piece).subscribe(data1 => {
        this.pieceList = data1 ;
      })
    }
    else if (!this.currentSupplier){
    this.pieceService.getAllPieces().subscribe(data => {
      this.pieceList = data ;
    });}
   
  }

  purchase(item : Piece){
    if(!this.authentificationService.currentClientValue?.userId){
      this.errorMessage = 'you should login to buy';
      return;
    }
    let text = 'Are you sure you want to buy this piece ?'
    if (confirm(text)== true){
    const purchase = new Purchase(this.authentificationService.currentClientValue.userId, item.reference , item.price , item.supplierId);

    this.purchaseService.savePurchase(purchase).subscribe(data => {
      this.infoMessage =' mission is completed';
      this.router.navigate(['home']);
      }, err =>{
        this.errorMessage = 'unexpected error occured';
        console.log(err);
      }
      )}
      else {
        this.errorMessage = 'you canceled!';
      }
  }

  createPieceRequest(){
    this.savePieceComponent?.showPieceModal();
  }
  savePieceWatcher(piece : Piece){
    this.pieceList.push(piece);
  }

  deletePiece(piece : Piece) {
    let itemIndex = this.pieceList.findIndex(item => item.idPiece === piece.idPiece);
    this.pieceService.deletePiece(piece).subscribe(data2 => {
      this.pieceList.splice(itemIndex , 1)
    },err => {
      this.errorMessage ='Unexpected error occurred.';
      console.log(err);
    })
  }
}
