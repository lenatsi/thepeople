import { Person } from './../../models/person.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map, catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  constructor(private httpClient: HttpClient){ }

  getPersonajes(filter:string, startDate:string, endDate:string): Observable<any> {
    const params = { filter:filter, startDate:startDate, endDate:endDate}
    return this.httpClient
      .get(`${environment.apiUrl}/personajes`, { params:params })
      .pipe(
        catchError((error) => {
          return error
        }),
      )
  }
  savePersonaje(personaje: Person): Observable<any> {
    return this.httpClient.post(`${environment.apiUrl}/personaje`, personaje).pipe(
      catchError((error) => {
        return error
      }),
    )
  }
  getPersonaje(_id: string): Observable<any> {
    return this.httpClient.get(`${environment.apiUrl}/personaje/${_id}`).pipe(
      catchError((error) => {
        return error
      }),
    )
  }
  updatePersonaje(personaje: Person): Observable<any> {
    return this.httpClient
      .put(`${environment.apiUrl}/personaje/${personaje._id}`, personaje)
      .pipe(
        catchError((error) => {
          return error
        }),
      )
  }
  deletePersonaje(_id: string): Observable<any> {
    return this.httpClient.delete(`${environment.apiUrl}/personaje/${_id}`).pipe(
      catchError((error) => {
        return error
      }),
    )
  }
}
