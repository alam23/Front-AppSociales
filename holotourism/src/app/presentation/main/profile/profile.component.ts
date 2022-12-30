import { FormGroup, FormBuilder, FormControl} from '@angular/forms';
import { ProfileModel } from './../../../base/models/profile.model';
import { Component, OnInit } from '@angular/core';
import { ProfileRepository } from 'src/app/base/profile.repository';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  profile!: ProfileModel;
  profileForm!: FormGroup;
  userId: string = '';
  disabled: boolean = true;
  constructor(
    private fb: FormBuilder,
    private ProfileRepo: ProfileRepository,
    private router: Router,
  ) { }


  ngOnInit(): void {
    this.userId = JSON.parse(localStorage.getItem("userId")!);
    this.initializeProfileForm();

  }

  initializeProfileForm(){
    this.ProfileRepo.obtenerProfile(this.userId).subscribe((res)=>{
      this.profile = res;
      this.profileForm= this.fb.group({
        strUserName: new FormControl({ value: this.profile.userName, disabled: this.disabled }),
        strName: new FormControl({ value: this.profile.name, disabled: this.disabled }),
        strLastName: new FormControl({ value: this.profile.lastName, disabled: this.disabled }),
        strCellNumber: new FormControl({ value: this.profile.cellNumber, disabled: this.disabled })
      });
    })
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

   this.ProfileRepo.editarProfile(this.userId.toString(), strUserName, strName, strLastName, strCellNumber).subscribe(
     (res) => {
       console.log(res);
       this.router.navigateByUrl('/', {skipLocationChange: true}).then(()=>
       this.router.navigate(['main/profile']));
     }
   )
 }

}
