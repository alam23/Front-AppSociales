import { FormGroup, FormBuilder, FormControl} from '@angular/forms';
import { ProfileModel } from './../../../base/models/profile.model';
import { Component, OnInit } from '@angular/core';
import { ProfileRepository } from 'src/app/base/profile.repository';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  profile!: ProfileModel;
  profileForm!: FormGroup;
  disabled: boolean = true;
  constructor(
    private fb: FormBuilder,
    private ProfileRepo: ProfileRepository

  ) { }


  ngOnInit(): void {
    this.initializeProfileForm();
    /*this.ProfileRepo.EditarProfile(this.profile.userId).subscribe((res) => {
      this.profile = res;
    });*/
  }

  initializeProfileForm(){
    this.profileForm= this.fb.group({
      strUserName: new FormControl({ value: '', disabled: this.disabled }),
      strName: new FormControl({ value: '', disabled: this.disabled }),
      strLastName: new FormControl({ value: '', disabled: this.disabled }),
      strCellNumber: new FormControl({ value: '', disabled: this.disabled })
    });
  }

  ToggleDisable(){
    if (this.disabled == true){
      this.profileForm.enable();
      this.disabled = false;
    }
    else{
      this.profileForm.disable();
      this.disabled = true;
    }

  }

  EditarProfile(){
    if(!this.profileForm.valid){
     console.log("ERROR");
     return;
   }

   let strUserName = this.profileForm.get('strUserName')?.value;
   let strName = this.profileForm.get('strName')?.value;
   let strLastName = this.profileForm.get('strLastName')?.value;
   let strCellNumber = this.profileForm.get('strCellNumber')?.value;

   this.ProfileRepo.EditarProfile("2", strUserName, strName, strLastName, strCellNumber).subscribe(
     (res) => {
       console.log(res);
     }
   )
 }

}
