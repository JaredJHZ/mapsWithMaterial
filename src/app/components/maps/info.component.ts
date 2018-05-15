import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef  } from '@angular/material';
import {FormBuilder,FormGroup} from '@angular/forms';
@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {

  form:FormGroup;

  constructor(public formBuilder:FormBuilder ,public dialogRef:MatDialogRef<InfoComponent>,
  @Inject(MAT_DIALOG_DATA) public data:any) { 
    console.log(data);    
    this.form = formBuilder.group({
      titulo:data.titulo,
      descripcion:data.info
    });
  }
  ngOnInit() {
  }

  guardarCambios(){
    this.dialogRef.close(this.form.value);
  }

  cancelar(){
    this.dialogRef.close();
  }

}
