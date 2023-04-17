import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { AbmAlumnosComponent } from './abm-alumnos/abm-alumnos.component';

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
  
  alumnos: Alumno[] = [
    {
      nombre: 'Juan',
      apellido: 'Perez',
      email: 'efpyi@example.com',
      nota: 3,
    },{
      nombre: 'Raul',
      apellido: 'Gonzalez',
      email: 'asddd@nono.com',
      nota: 7,
    },{
      nombre: 'Juan',
      apellido: 'Perez',
      email: 'eaeaea@aaaa.com',
      nota: 10,
    }
  ];

  dataSource = new MatTableDataSource(this.alumnos);

  displayedColumns: string[] = ['alumno', 'iniciales', 'email', 'nota', 'eliminar'];
  
  // onSubmit(): void {
  //   if(this.registerForm.valid){
  //     this.alumnos.push(this.registerForm.value);
  //     this.dataSource = new MatTableDataSource(this.alumnos);
  //     this.registerForm.reset();
  //   }
  // }

  eliminarAlumno(index: number) {
    if (index !== -1) {
      this.alumnos.splice(index, 1);
      this.dataSource = new MatTableDataSource(this.alumnos);
    }
  }

  constructor(private matDialog: MatDialog) {}

  abrirABMAlumnos(): void {
    const dialog = this.matDialog.open(AbmAlumnosComponent)
    dialog.afterClosed().subscribe((valor:Alumno) => {
      if (valor) {
        this.dataSource.data = [
          ...this.dataSource.data,
          {
            ...valor
            // id: this.dataSource.data.length + 1,
          }
        ];
      }
    })
  }
  
}



// Editar formulario

// this.registerForm.patchValue({
//   nombre:''
// })