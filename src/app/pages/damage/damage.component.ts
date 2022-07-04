import { Component, OnInit, ViewChild } from '@angular/core';
import { DamageSaveComponent } from 'src/app/component/damage-save/damage-save.component';
import { Client } from 'src/app/model/client.model';
import { Damage } from 'src/app/model/damage.model';
import { Manager } from 'src/app/model/manager.model';
import { AuthentificationService } from 'src/app/services/authentification.service';
import { DamageService } from 'src/app/services/damage.service';
declare var $: any ;

@Component({
  selector: 'app-damage',
  templateUrl: './damage.component.html',
  styleUrls: ['./damage.component.scss']
})
export class DamageComponent implements OnInit {

  
  damage : Damage = new Damage();
  damageList : Array<Damage> = [];
  errorMessage: string = "";
  infoMessage: string = "";
  currentClient : Client = new Client ();
  currentManager : Manager = new Manager();
  selectedDamage : Damage = new Damage; 

  @ViewChild(DamageSaveComponent) saveComponent : DamageSaveComponent | undefined ;

  constructor(private authentificationService : AuthentificationService,
              private damageservice : DamageService
    ) {  this.authentificationService.currentClient.subscribe(data3 => 
      {this.currentClient =data3;});
      this.authentificationService.currentManager.subscribe(data4 => 
        {this.currentManager = data4;});
    }

  
  ngOnInit(): void {
    if (this.currentClient){
    this.damage.cin = this.authentificationService.currentClientValue.cin;
     this.damageservice.getDamagesOfUser(this.damage).subscribe(data => {
    this.damageList = data ;
     });}
     else if (this.currentManager){
      this.damageservice.getAllDamages().subscribe(data => {
        this.damageList = data ;
         });}
      }

  createDamageRequest(){
      this.selectedDamage = new Damage();
       this.saveComponent?.showDamageModal();
       console.log("clicked");
      }

      editDamageRequest(item : Damage){
        this.selectedDamage = Object.assign({}, item);
        this.saveComponent?.showDamageModal();
      }
  saveDamageWatcher(damage : Damage){
    let itemIndex = this.damageList.findIndex(item  => item.damageId === damage.damageId);
    if (itemIndex !== -1) {
      this.damageList[itemIndex] = damage;
    } else {
      this.damageList.push(damage);
    }
  }
  
 
 deleteDamage(damage :Damage){
  let itemIndex = this.damageList.findIndex(item => item.damageId === damage.damageId);
  this.damageservice.deletedamage(damage).subscribe(data => {
    this.damageList.splice(itemIndex, 1)
  },err => {
    this.errorMessage= 'Unexpected error occurred.';
    console.log(err);
  })
}
}
