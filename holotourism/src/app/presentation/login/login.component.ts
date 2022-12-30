import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { UserRepository } from 'src/app/base/user.repository';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  ngOnInit(): void {
    this.inicializarFormulario();
  }

  loginForm!: FormGroup;
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
    this.loginForm = this.fb.group({
      strUsername: [null, Validators.required],
      strPassword: [null, Validators.required],
    });
  }

  loginUsuario(){
    if(!this.loginForm.valid){
      console.log("ERROR");
      return;
    }
    let strUsername = this.loginForm.get('strUsername')?.value;
    let strPassword = this.loginForm.get('strPassword')?.value;

    this.userRepo.loginUsuario(strUsername,strPassword).subscribe(
      (res) => {
        console.log(res);
        localStorage.setItem('userId', res.userId);
        this.router.navigate(
          ['/main/mis_rutas']
        )
      }
   )

  }
}
