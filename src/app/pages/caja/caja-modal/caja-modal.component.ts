import { Component, Inject } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { MAT_DIALOG_DATA, MatDialogRef  } from '@angular/material/dialog';


interface VALUES {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-caja-modal',
  imports: [
    MatFormFieldModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    MatRadioModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatCheckboxModule,
  ],
  templateUrl: './caja-modal.component.html',
})
export class CajaModalComponent {
  country: VALUES[] = [];

  
  constructor( 
    public dialogRef: MatDialogRef<CajaModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any ) { }  //REVISAR. Utilizar any para definir el tipo de dato no es recomendable.
  
  ngOnInit() {
    for (const item of this.data){ //Hay que agregar algún tipo de control. Si data no es un array de JSON generará errores.
      this.country.push({
        value: item.checker,
        viewValue: item.checker
      })
  } 
}

  closeModal(): void {
    this.dialogRef.close(); // Cierra el modal
  }
  
      


}
