import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from "@angular/forms";
import { InventoryService } from '../services/inventory/inventory.service';

@Component({
  selector: 'app-add-inventory',
  templateUrl: './add-inventory.page.html',
  styleUrls: ['./add-inventory.page.scss'],
})
export class AddInventoryPage implements OnInit {
  inventoryForm: FormGroup;  
  constructor(
    // private invServices: InventoryService, 
    private router: Router, 
    public fb: FormBuilder
  ) { }

  ngOnInit() {
    this.inventoryForm = this.fb.group({
      item: [''],
      itemCost: [''],
      itemValue: ['']
    })
  }
  formSubmit(){
    if(!this.inventoryForm.valid){ 
      return false;
     } else {
      // this.invServices.createItem(this.inventoryForm.value).then(res => {
      //   console.log(res)
      //   this.inventoryForm.reset();
      //   this.router.navigateByUrl('/home', { replaceUrl: true });
      // }) .catch(error => console.log(error));
    }
  }
}
