import { Component, OnInit, ViewChild } from '@angular/core';
import { UserSaveComponent } from 'src/app/component/user-save/user-save.component';
declare var $: any ;
@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.scss']
})
export class ManagerComponent implements OnInit {
@ViewChild(UserSaveComponent) userSaveComponent : UserSaveComponent | undefined ;

constructor() { }

  ngOnInit(): void {
    }

    createManagerRequest(){
      this.userSaveComponent?.showManagerModal();
    }
    createMechanicRequest(){
      this.userSaveComponent?.showMechanicModal();
    }
    createSupplierRequest(){
      this.userSaveComponent?.showSupplierModal();
    }
}
