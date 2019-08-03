import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { INoble } from './noble';
import { Observable, throwError  } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NobleService {

  private _url: string = 'http://api.nobelprize.org/v1/prize/json';

  constructor(private http: HttpClient) { }

  getWinners(): Observable<any> {
    return this.http.get(this._url)
               .pipe(
                 catchError(this.errorHandler),
               );
  }
  errorHandler(error: HttpErrorResponse) {
    return throwError (error.message || 'Server Error');
  }
}