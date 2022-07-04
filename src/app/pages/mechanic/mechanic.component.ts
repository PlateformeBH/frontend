import { Component, OnInit, ViewChild } from '@angular/core';
import { UserSaveComponent } from 'src/app/component/user-save/user-save.component';
import { Manager } from 'src/app/model/manager.model';
import { Mechanic } from 'src/app/model/mechanic.model';
import { AddingService } from 'src/app/services/adding.service';
import { AuthentificationService } from 'src/app/services/authentification.service';

@Component({
  selector: 'app-mechanic',
  templateUrl: './mechanic.component.html',
  styleUrls: ['./mechanic.component.scss']
})
export class MechanicComponent implements OnInit {

  mechanicList : Array<Mechanic>;
  errorMessage: string = "";
  selectedMechanic : Mechanic = new Mechanic();
  currentManager: Manager = new Manager;

  @ViewChild(UserSaveComponent) userSaveComponent : UserSaveComponent | undefined ;

  constructor(private addingService : AddingService ,private authentificationService : AuthentificationService,
     ) {this.authentificationService.currentManager.subscribe(data3 => 
      {this.currentManager =data3;}); }

  ngOnInit(): void {
    this.addingService.getAllMechanic().subscribe( data => {
      this.mechanicList = data;
    });

  }
  createMechanicRequest(){
    this.userSaveComponent?.showMechanicModal();
  }
  saveMechanicWatcher(mechanic : Mechanic){
    this.mechanicList.push(mechanic);
  }
  deleteMechanic(mechanic :Mechanic){
    let itemIndex = this.mechanicList.findIndex(item => item.userId === mechanic.userId);
    this.addingService.deleteMechanic(mechanic).subscribe(data => {
      this.mechanicList.splice(itemIndex, 1)
    },err => {
      this.errorMessage= 'Unexpected error occurred.';
      console.log(err);
    })
  }
}
