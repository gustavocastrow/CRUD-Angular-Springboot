import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, of } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';

import { Course } from '../model/course';
import { ErrorDialogComponent } from './../../shared/components/error-dialog/error-dialog.component';
import { CoursesService } from './../services/courses.service';


@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})

export class CoursesComponent implements OnInit {

  courses$: Observable<Course[]>;
  displayedColumns = ['name', 'category', 'actions'];

  constructor(
    private coursesService: CoursesService,
    public dialog: MatDialog,
    private router: Router,
    private route: ActivatedRoute
  ){
    this.courses$ = this.coursesService.list()
    .pipe(
      catchError(error => {
        this.onError('Erro ao carregar cursos.')
        return of([])
      })
    );
  }

  onError(errorMsg: string){
    this.dialog.open(ErrorDialogComponent,{
      data: errorMsg
    });

  }

  ngOnInit(): void {

  }

  onAdd(){
    this.router.navigate(['new'], {relativeTo: this.route});
  }

}


//Quando uma variavel termina com $ ela é um Observable, ex: courses$
