import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { HomeRepository } from 'src/app/base/home.repository';

@Component({
  selector: 'app-crear-ruta',
  templateUrl: './crear-ruta.component.html',
  styleUrls: ['./crear-ruta.component.css']
})
export class CrearRutaComponent {
  userId: string = '';

  crearRutaForm!: FormGroup;
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private domSanitizer: DomSanitizer,
    private matIconRegistry: MatIconRegistry,
    private homeRepo: HomeRepository,
  ){
    this.matIconRegistry.addSvgIcon("logo", this.domSanitizer
    .bypassSecurityTrustResourceUrl('assets/img/icon/logo.svg'));
  }

  ngOnInit(): void {
    this.userId = JSON.parse(localStorage.getItem("userId")!);
    this.inicializarFormulario();
  }

  redirectTo(url:string){
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(()=>
    this.router.navigate([url]));
  }

  inicializarFormulario(){
    this.crearRutaForm = this.fb.group({
      strName: [null, Validators.required],
      strDescription: [null, Validators.required]
    });
  }

  crearRuta(){
     if(!this.crearRutaForm.valid){
      console.log("ERROR");
      return;
    }

    let strName = this.crearRutaForm.get('strName')?.value;
    let strDescription = this.crearRutaForm.get('strDescription')?.value;

    this.homeRepo.crearRuta(this.userId.toString(), strName, strDescription).subscribe(
      (res) => {
        console.log(res);
        this.router.navigate(
          ['/main/mis_rutas'], {
            state: { user: res}
          }
        )
      }
    )
  }

}
