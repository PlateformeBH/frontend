import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Piece } from 'src/app/model/piece.model';
import { PieceService } from 'src/app/services/piece.service';

@Component({
  selector: 'app-supplier',
  templateUrl: './supplier.component.html',
  styleUrls: ['./supplier.component.scss']
})
export class SupplierComponent implements OnInit {

  piece: Piece = new Piece;
  errorMessage : string ="";
  constructor( private pieceService: PieceService, 
    private router: Router,) { }

  ngOnInit(): void {
  }
  addPiece(){
    this.pieceService.addPiece(this.piece).subscribe( data => {
      this.router.navigate(['/home']);},
      err => {
        if (err?.status === 409){
          this.errorMessage = 'piece reference alredy exist.';
        } else {
          this.errorMessage =  'Unexpected error occured';
          console.log(err);
        }
      }
      ) 
  }

}
