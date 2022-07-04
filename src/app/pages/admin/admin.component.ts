import { Component, OnInit } from '@angular/core';
import { Damage } from 'src/app/model/damage.model';
import { DamageService } from 'src/app/services/damage.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {


  damageList : Array<Damage> = [];
  errorMessage : string ="";

  constructor(private damageService : DamageService) { }

  ngOnInit(): void {

    this.damageService.getAllDamages().subscribe( data => {
      this.damageList = data ;
    });

    
  }

  deleteDamage(damage :Damage){
    let itemIndex = this.damageList.findIndex(item => item.damageId === damage.damageId);
    this.damageService.deletedamage(damage).subscribe(data => {
      this.damageList.splice(itemIndex, 1)
    },err => {
      this.errorMessage= 'Unexpected error occurred.';
      console.log(err);
    })
  }
}
