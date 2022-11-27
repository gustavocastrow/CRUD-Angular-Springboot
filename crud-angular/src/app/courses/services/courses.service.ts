import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Course } from '../model/course';
import { first, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  private readonly API = 'api/courses'; //talvez de erro...

  constructor(private httpClient: HttpClient) { } //injeção do httpClient

  list(){
    return this.httpClient.get<Course[]>(this.API) //buscando informações no servidor
    .pipe(
      first(),
      //delay(5000),
      tap(courses => console.log(courses))
    );
  }

  save(record: Course){
    return this.httpClient.post<Course>(this.API, record).pipe(first());

  }
}


//A responsabilidade para onde os dados do form seram enviados
//é do service
