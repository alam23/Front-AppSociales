import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { UserRepository } from 'src/app/base/user.repository';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{
  ngOnInit(): void {
    this.inicializarFormulario();
  }
  
  registerForm!: FormGroup;
  hide = true;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private domSanitizer: DomSanitizer,
    private matIconRegistry: MatIconRegistry,
    private userRepo: UserRepository
  ) {
    this.matIconRegistry.addSvgIcon("logo", this.domSanitizer
    .bypassSecurityTrustResourceUrl('assets/img/icon/logo.svg'));
  }

  inicializarFormulario(){
    this.registerForm = this.fb.group({
      strNombre: [null, Validators.required],
      strApellido: [null, Validators.required],
      strUsername: [null, Validators.required],
      strPassword: [null, Validators.required],
      strPhone: [null, Validators.required],
    });
  }

  registrarUsuario(){
    if(!this.registerForm.valid){
      console.log("ERROR");
      return;
    }
    let strNombre = this.registerForm.get('strNombre')?.value;
    let strApellido = this.registerForm.get('strApellido')?.value;
    let strUsername = this.registerForm.get('strUsername')?.value;
    let strPassword = this.registerForm.get('strPassword')?.value;
    let strPhone = this.registerForm.get('strPhone')?.value;

    this.userRepo.registrarUsuario(strUsername,strPassword,strNombre,strApellido,strPhone).subscribe(
      (res) => {
        console.log(res);
        this.router.navigate(
          ['/main/mis_rutas']
        )
      }
   )
    
  }
}
