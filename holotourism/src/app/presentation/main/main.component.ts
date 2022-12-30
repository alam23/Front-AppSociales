import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { HomeRepository } from 'src/app/base/home.repository';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  isExpanded: boolean = true;
  busquedaForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private domSanitizer: DomSanitizer,
    private matIconRegistry: MatIconRegistry,
    private homeRepo: HomeRepository,
  ) {
    this.matIconRegistry.addSvgIcon("logo", this.domSanitizer
    .bypassSecurityTrustResourceUrl('assets/img/icon/logo.svg'));
  }

  ngOnInit(): void {
    this.inicializarFormulario();
  }

  redirectTo(url:string){
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(()=>
    this.router.navigate([url]));
  }

  buscarRuta(){
    if(!this.busquedaForm.valid){
      console.log("ERROR");
      return;
    }

    let strBusqueda = this.busquedaForm.get('strBusqueda')?.value;

    this.homeRepo.buscarRutas(strBusqueda).subscribe((res) => {
      console.log(res);
      this.router.navigateByUrl('/', {skipLocationChange: true}).then(()=>
      this.router.navigate(['/main/busqueda'], {
        state: { lstRutas: res },
      }));
    });
  }

  inicializarFormulario(){
    this.busquedaForm = this.fb.group({
      strBusqueda: [null, Validators.required],
    });
  }

  cerrarSesion(){
    localStorage.removeItem('userId');
    this.router.navigate(['/login']);
  }
}
