import { ReadVarExpr } from '@angular/compiler';
import { Component,EventEmitter, Input, OnInit, Output } from '@angular/core';
import { right } from '@popperjs/core';
import { Damage } from 'src/app/model/damage.model';
import { AuthentificationService } from 'src/app/services/authentification.service';
import { DamageService } from 'src/app/services/damage.service';


declare var $: any ;

@Component({
  selector: 'app-damage-save',
  templateUrl: './damage-save.component.html',
  styleUrls: ['./damage-save.component.scss']
})
export class DamageSaveComponent implements OnInit {

  errorMessage : string = "";
  infoMessage: string = "";
  selectedFile: File;
  userFile ;
  public imagePath;
  imgURL: any;
  imgURL1:any;
  carBrands = ['ABARTH','Alfa_romeo', 'Audi','Autobianchi',
  'Bentley','BMW','Cadillac','Chery','Chevrolet','Chrysler','Citroën',
  'Dacia','Daewoo','Dodge','Dongfeng','DS','Fiat','Ford','Foton', 'Geely',
  'Honda','Hyundai','Infiniti','Isuzu','Iveco','Jeep','Kia','Lada','LAND_ROVER',
  'Lancia','Lexus','Mazda','MERCEDES_BENZ','MG', 'MINI','MITSUBISHI','Nissan',
  'Peugeot','Porsche','Renault','Seat','Skoda','Smart','Ssangyong','Suzuki',
  'Tala','Toyota','Volkswagen','Volvo'
];
  @Input() damage: Damage= new Damage();
  @Output() save = new EventEmitter<any>();
  constructor(private damageService : DamageService ,private authentificationService : AuthentificationService) { }

  ngOnInit(): void {
  }

  saveDamage(){
    const damage1 = new Damage (
      this.authentificationService.currentClientValue.cin,
      this.authentificationService.currentClientValue.firstName,
      this.authentificationService.currentClientValue.lastName , 
      this.authentificationService.currentClientValue.email,
      this.authentificationService.currentClientValue.phoneNumber , 
      this.authentificationService.currentClientValue.address ,
      this.damage.serial_number,
      this.damage.contract_number,
      this.damage.carBrand,
      this.damage.carModel,
      this.damage.accidentDate,
      this.damage.accidentPhoto,
      this.damage.reportPhoto,
       )
  
    this.damageService.saveDamage(damage1).subscribe(data =>{ 
      this.infoMessage =' mission is completed';
      this.save.emit(data);
     
      $('#damageModal').modal('hide');
    }, err =>{
    this.errorMessage = 'unexpected error occured';
    console.log(err);}
    )
    
  }
   onFileChanged(event) {
    if (event.target.files.length > 0)
    {
      const file = event.target.files[0];
      this.userFile = file;
 
    var mimeType = event.target.files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      this.errorMessage = "Only images are supported.";
      return;
    }
 
    var reader = new FileReader();
    
    this.imagePath = file;
    reader.readAsDataURL(file); 
    reader.onload = (_event) => { 
      if (this.imgURL){
      this.imgURL = reader.result; }
      else{
        this.imgURL1 =reader.result;
      }
    }
  }
     
  }
  showDamageModal(){
    $('#damageModal').modal('show');
  }
}
