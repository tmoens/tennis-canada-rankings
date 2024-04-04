import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable, of} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {environment} from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FetchService {

  constructor(
    private http: HttpClient,
  ) { }

  // Load the Open tournament List
  fetchOpenTournaments(year: number): Observable<any> {
    return this.http.get(environment.serverPrefix + '/open-tournaments/' + String(year),
      {
        observe: 'body',
        responseType: 'json',
      })
      .pipe(
        catchError(this.handleError('Fetching open tournament list for year: ${year}', []))
      );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  // * This generic handler was copied from the Angular tutorial.
  // * And as a note to future, even thicker, self who will be going WTF?...
  // * We use it to handle errors for all our http calls.  But all
  // * our HTTP Calls return different types!  And the error handler
  // * has to return the right type.  So, the error handler is
  // * parameterized such that you can tell it what to return when
  // * it is finished doing it's business.
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.log(`Operation: ${operation} failed. Error: ${JSON.stringify(error)}`);
      // Let the app keep running by returning what we were told to.
      return of(result as T);
    };
  }
}
