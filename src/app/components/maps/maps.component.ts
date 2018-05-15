import { Component, OnInit } from '@angular/core';
import {Marcador} from '../../clases/Marcador.class';
import {MatSnackBar} from '@angular/material/snack-bar';
import { UnsubscriptionError } from 'rxjs';
import {MatDialog,MatDialogRef} from '@angular/material'; 
import {InfoComponent} from './info.component';
@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styles: [],
  styleUrls:['./maps.component.css']
})
export class MapsComponent implements OnInit {

  marcadores:Marcador[]=[];
  constructor(public snackbar:MatSnackBar, public dialog:MatDialog) { 
    if(localStorage.getItem("marcadores")){
      this.cargarMarcadores();
      if(this.marcadores.length<1) {
        let marcador = new Marcador(19.44,-99.20);
        this.marcadores.push(marcador);
        this.guardarMarcadores();
      } 
    }else{
      let marcador = new Marcador(19.44,-99.20);
      this.marcadores.push(marcador);
      this.guardarMarcadores();
    }
   
  }


  ngOnInit() {
  }

  cargarMarcadores(){
      this.marcadores = JSON.parse(localStorage.getItem("marcadores"));
  }

  guardarMarcadores(){
    localStorage.setItem("marcadores",JSON.stringify(this.marcadores));
  }
  agregarMarcador(event){
    let coords:{lat:number,lng:number};
    coords = event.coords;
    let marcador = new Marcador(coords.lat,coords.lng);
    this.marcadores.push(marcador);
    this.guardarMarcadores();
    this.snackbar.open("Marcador guardado","close",{duration:1000});
  }
  eliminarMarcador(index:number){
   this.marcadores.splice(index,1);
   this.guardarMarcadores();
   this.snackbar.open("Marcador Eliminado","close",{duration:1000});
  }

  editar(marcador:Marcador){
    let dialogRef = this.dialog.open(InfoComponent,{width:'250px',data:{titulo:marcador.titulo, info:marcador.descripcion}});
    dialogRef.afterClosed().subscribe(
      (result)=>{
        if(result){
          marcador.titulo = result.titulo;
          marcador.descripcion = result.descripcion;
          this.guardarMarcadores();
          this.snackbar.open("Marcador actualizado","close",{duration:1000});
        }
      }
    )
  }
}
