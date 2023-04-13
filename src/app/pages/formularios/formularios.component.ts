import { Component, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';

export interface Alumno {
  nombre: string;
  apellido: string;
  email: string;
  nota: number;
}

@Component({
  selector: 'app-formularios',
  templateUrl: './formularios.component.html',
  styleUrls: ['./formularios.component.scss'],
})
export class FormulariosComponent {
  registerForm: FormGroup;

  constructor(public formBuilder: FormBuilder) {
    this.registerForm = this.formBuilder.group({
      nombre: this.nombreControl,
      apellido: this.apellidoControl,
      email: this.emailControl,
      nota: this.notaControl,
    });
  }

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
  
  alumnos: Alumno[] = [];

  dataSource = new MatTableDataSource(this.alumnos);

  displayedColumns: string[] = ['alumno', 'iniciales', 'email', 'nota', 'eliminar'];
  
  onSubmit(): void {
    if(this.registerForm.valid){
      this.alumnos.push(this.registerForm.value);
      this.dataSource = new MatTableDataSource(this.alumnos);
      this.registerForm.reset();
    }
  }

  eliminarAlumno(index: number) {
    if (index !== -1) {
      this.alumnos.splice(index, 1);
      this.dataSource = new MatTableDataSource(this.alumnos);
    }
  }
  
}


// Editar formulario

// this.registerForm.patchValue({
//   nombre:''
// })