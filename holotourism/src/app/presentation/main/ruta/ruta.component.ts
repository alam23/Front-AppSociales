import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RutaInfoModel } from './../../../base/models/rutaInfo.model';
import { Component } from '@angular/core';
import { RutaRepository } from 'src/app/base/ruta.repository';

@Component({
  selector: 'app-ruta',
  templateUrl: './ruta.component.html',
  styleUrls: ['./ruta.component.css']
})
export class RutaComponent {
  rutaId!: string;
  rutaInfo!: RutaInfoModel;
  postForm!: FormGroup;
  commentaryForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private rutaRepo: RutaRepository,
  ) {}

  ngOnInit(): void {
    this.inicializarFormularios();
    console.log(history.state.rutaId);
    if (history.state.rutaId) this.rutaId = history.state.rutaId;
    this.actualizarRutaInfo(this.rutaId);
  }

  actualizarRutaInfo(rutaId: string){
    this.rutaRepo.obtenerRutaInfo(rutaId).subscribe(
      (res) => {
        this.rutaInfo = res;
        console.log(res);

        this.rutaInfo.posts.forEach((post, i)=>{
          this.rutaRepo.obtenerComentario(post.postId.toString()).subscribe((res)=>{
            res.commentaries.forEach((val)=>{
              this.rutaRepo.obtenerUsuarioComentario(val.commentId.toString()).subscribe((res)=>{
                this.rutaInfo.posts[i].commentaries.push(res);
                console.log(this.rutaInfo);
              })
            })
          })
        });
      }
    )
  }

  inicializarFormularios(){
    this.postForm = this.fb.group({
      body: [null, Validators.required],
    });
    this.commentaryForm = this.fb.group({
      body: [null, Validators.required],
    });
  }

  crearPost(){
    if(!this.postForm.valid){
      console.log("ERROR");
      return;
    }

    let strBody = this.postForm.get('body')?.value;

    this.rutaRepo.crearPost(
      "1",
      this.rutaInfo.routeId.toString(),
      "a",
      strBody,
      "a"
    ).subscribe(
      (res) => {
        this.actualizarRutaInfo(this.rutaId);
      }
    )
  }

  crearComentario(postId: string){
    if(!this.commentaryForm.valid){
      console.log("ERROR");
      return;
    }

    let strBody = this.commentaryForm.get('body')?.value;

    this.rutaRepo.crearComentario(
      postId,
      "1",
      strBody
    ).subscribe(
      (res) => {
        this.actualizarRutaInfo(this.rutaId);
      }
    )
  }
}
