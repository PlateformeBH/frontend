import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Manager } from 'src/app/model/manager.model';
import { Mechanic } from 'src/app/model/mechanic.model';
import { Supplier } from 'src/app/model/supplier.model';
import { AddingService } from 'src/app/services/adding.service';

declare var $: any ;

@Component({
  selector: 'app-user-save',
  templateUrl: './user-save.component.html',
  styleUrls: ['./user-save.component.scss']
})
export class UserSaveComponent implements OnInit {

  @Input()manager: Manager =new Manager();
  @Input() mechanic: Mechanic = new Mechanic();
  @Input() supplier : Supplier = new Supplier();
  errorMessage : string ="";
  infoMessage: string = "";
  focus;
  focus1;
  focus2;
  focus3;
  focus4;

  specialityL =[ 'Car_Glassware','Mechanic','Electrician','Pneumatic','Sheet_Metal_Worker','Upholsterer',];
  @Output() save = new EventEmitter<any>();
  constructor( private addingService : AddingService,) { }

  ngOnInit(): void {
  }

  registerAsManager(){
    this.addingService.addManager(this.manager).subscribe( data => {
      this.infoMessage = 'mission is complited';
      this.save.emit(data);
      $('#managerModal').modal('hide');
    },
      err => {
        if (err?.status === 409){
          this.errorMessage = 'Username alredy exist.';
        } else {
          this.errorMessage =  'Unexpected error occured';
          console.log(err);
        }
      }
      ) 
  }
  registerAsMechanic(){
    this.addingService.addMechanic(this.mechanic).subscribe( data => {
      this.infoMessage ='mission is complited';
      this.save.emit(data);
      $('#mechanicModal').modal('hide');
    },

      err => {
        if (err?.status === 409){
          this.errorMessage = 'Username alredy exist.';
        } else {
          this.errorMessage =  'Unexpected error occured';
          console.log(err);
        }
      }
      ) 
  }
  registerAsSupplier(){
    this.addingService.addSupplier(this.supplier).subscribe( data => {
      this.infoMessage ='mission is complited';
      this.save.emit(data);
      $('#supplierModal').modal('hide');},
      err => {
        if (err?.status === 409){
          this.errorMessage = 'Username alredy exist.';
        } else {
          this.errorMessage =  'Unexpected error occured';
          console.log(err);
        }
      }
      ) 
  }
  showManagerModal(){
    $('#managerModal').modal('show');
  }
  showMechanicModal(){
    $('#mechanicModal').modal('show');
  }
  showSupplierModal(){
    $('#supplierModal').modal('show');
  }


}
