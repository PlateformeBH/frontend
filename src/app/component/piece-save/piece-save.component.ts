import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Piece } from 'src/app/model/piece.model';
import { AuthentificationService } from 'src/app/services/authentification.service';
import { PieceService } from 'src/app/services/piece.service';

declare var $: any ;

@Component({
  selector: 'app-piece-save',
  templateUrl: './piece-save.component.html',
  styleUrls: ['./piece-save.component.scss']
})
export class PieceSaveComponent implements OnInit {
  piece: Piece = new Piece ();
  errorMessage : string ="";
  infoMessage: string = "";


  carBrands = ['ABARTH','Alfa_romeo', 'Audi','Autobianchi',
  'Bentley','BMW','Cadillac','Chery','Chevrolet','Chrysler','Citroën',
  'Dacia','Daewoo','Dodge','Dongfeng','DS','Fiat','Ford','Foton', 'Geely',
  'Honda','Hyundai','Infiniti','Isuzu','Iveco','Jeep','Kia','Lada','LAND_ROVER',
  'Lancia','Lexus','Mazda','MERCEDES_BENZ','MG', 'MINI','MITSUBISHI','Nissan',
  'Peugeot','Porsche','Renault','Seat','Skoda','Smart','Ssangyong','Suzuki',
  'Tala','Toyota','Volkswagen','Volvo'

];

familyP = ['Braking', 'Filtration', 'Engine','Clutch','Gearbox',
'Universal_Joints','Start_Load','Exhaust','Steering','Suspension',
'Bearings','Visibility','Heating_and_air_conditioning','Interior',
'Accessories_and_Carrying','Wheels_Rims','Car_Body',];

@Output() save = new EventEmitter<any>();

constructor(private pieceService : PieceService, private authentificationService : AuthentificationService ) { }

  ngOnInit(): void {
  }
addPiece(){
  this.piece.supplierId = this.authentificationService.currentSupplierValue.userId;
    this.pieceService.addPiece(this.piece).subscribe( data => {
            this.infoMessage =' mission is completed';
            this.save.emit(data);
          $('#pieceModal').modal('hide');
          },
      err => {
        if (err?.status === 409){
          this.errorMessage = 'piece reference alredy exist.';
        } else {
          this.errorMessage =  'Unexpected error occured';
          console.log(err);
        };
      }
      ) 
  }

  showPieceModal(){
    $('#pieceModal').modal('show');
  }
}
