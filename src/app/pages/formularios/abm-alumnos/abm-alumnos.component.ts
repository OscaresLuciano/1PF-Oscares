import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-abm-alumnos',
  templateUrl: './abm-alumnos.component.html',
  styleUrls: ['./abm-alumnos.component.scss']
})
export class AbmAlumnosComponent {

  nombreControl = new FormControl('', [
    Validators.required,
    Validators.minLength(3),
    Validators.maxLength(10)
  ]);

  apellidoControl = new FormControl('', [
    Validators.required,
    Validators.minLength(3),
    Validators.maxLength(10)
  ]);

  emailControl = new FormControl('', [
    Validators.required,
    Validators.email,
    Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")
  ]);

  notaControl = new FormControl('', [
    Validators.required,
    Validators.min(0),
    Validators.max(10)
  ]);


  registerForm = new FormGroup({
    nombre: this.nombreControl,
    apellido: this.apellidoControl,
    email: this.emailControl,
    nota: this.notaControl
  });

  constructor(private dialogRef: MatDialogRef<AbmAlumnosComponent>) {}


  guardar(): void {
    if (this.registerForm.valid) {
      this.dialogRef.close(this.registerForm.value)
    } else {
      this.registerForm.markAllAsTouched();
    }
  }

}
