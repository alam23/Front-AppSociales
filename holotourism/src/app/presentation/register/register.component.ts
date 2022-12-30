import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

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

  constructor(
    private fb: FormBuilder,
    private domSanitizer: DomSanitizer,
    private matIconRegistry: MatIconRegistry,
  ) {
    this.matIconRegistry.addSvgIcon("logo", this.domSanitizer
    .bypassSecurityTrustResourceUrl('assets/img/icon/logo.svg'));
  }

  inicializarFormulario(){
    this.registerForm = this.fb.group({
      strNombres: [null, Validators.required],
    });
  }
}
