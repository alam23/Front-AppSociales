import { Injectable } from "@angular/core";

@Injectable()
export class CommonService {
  constructor(){}


  convertIdToNumber(data: any[], idName: string){
    data.forEach((val, index)=>{
      data[index].idName = Number(val[idName]);
    })
    return data;
  }

  ordenarArray(data: any[], idName: string){

    data.sort(function(a, b){
      return a[idName] - b[idName];
    })

    return data;
  }

  ordenarArrayInverso(data: any[], idName: string){

    data.sort(function(a, b){
      return b[idName] - a[idName];
    })

    return data;
  }
}
